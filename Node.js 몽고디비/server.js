const express = require('express');
const app = express()
const { MongoClient, ObjectId } = require('mongodb')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt') 
const MongoStore = require('connect-mongo')
require('dotenv').config()

app.use(passport.initialize())
app.use(session({
  secret: '암호화에 쓸 비번',
  resave : false,
  saveUninitialized : false,
  cookie : { maxAge : 60* 60 * 1000 },
  store : MongoStore.create({
    mongoUrl : 'mongodb+srv://sparta:test@cluster0.p7hon5t.mongodb.net/?retryWrites=true&w=majority',
    dbName : 'forum'
  })
}))
app.use(passport.session()) 

const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = new S3Client({
  region : 'ap-northeast-2',
  credentials : {
      accessKeyId : process.env.S3_KEY,
      secretAccessKey : process.env.S3_SECRET
  }
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'codingapplebuc',
    key: function (요청, file, cb) {
      cb(null, Date.now().toString()) //업로드시 파일명 변경가능
    }
  })
})


app.use(methodOverride('_method')) 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  let result = await db.collection('user').findOne({ username : 입력한아이디})
  if (!result) {
    return cb(null, false, { message: '아이디 DB에 없음' })
  }
  if (await bcrypt.compare(입력한비번, result.password)) {
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비번불일치' });
  }
}))

let connectDB = require('./database.js')

let db
connectDB.then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(process.env.PORT, ()=> {
    console.log('http://localhost:8080 에서 서버 실행 중 ')
  })
}).catch((err)=>{
  console.log(err)
})

passport.serializeUser((user, done) => {
  process.nextTick(() => {
    done(null, { id: user._id, username: user.username })
  })
})

passport.deserializeUser(async (user, done) => {
  let result = await db.collection('user').findOne({ _id : new ObjectId(user.id)})
  delete result.password  
  process.nextTick(() => {
    done(null, result)
  })
})

function checklogin(요청, 응답, next){
  if(!요청.user) {
    응답.send('로그인하십셔')
  }
  next()
}

// app.use(checklogin)

app.get('/', (요청, 응답)=> {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/news', (req, res) => {
  db.collection('post').insertOne({title : '어쩌구'})

})

app.get('/list', async (req, res) => {
  let result = await db.collection('post').find().toArray();
  console.log(result[0].title)
  // res.send(result[0].title)

  res.render('list.ejs', { 글목록 : result })
})

app.get('/time', (요청, 응답) => {
  응답.render('time.ejs', { data : new Date() })
})

app.get('/write', (req, res) => {
  res.render('write.ejs')
})

app.post('/add', upload.single('img1') ,async (req, res) => {

  try {
    if(req.body.title == ''){
      res.send('제목 입력해 주세요')
    } else {
      await db.collection('post').insertOne({title : req.body.title, content :  req.body.content, img : req.file.location})
    res.redirect('/list')
    }
  } catch(e) {
    console.log(e)
    res.status(500).send('서버 에러 발생 ')
    }
})

app.get('/detail/:id',  async (req, res)=> {
  try {
    console.log("id 확인: ", req.params);
    let result = await db.collection('post').findOne({_id: new ObjectId(req.params.id)})
    // console.log("붐업: ",result)
    if (result == null) {
    res.status(400).send("이상한 URL 입력함")

    }
    // console.log("id확인 : ",req.params.id)
    res.render('detail.ejs', {result : result})
  } catch(e) {
    console.log("오류가 왜 나와 : ",e)
    res.status(400).send("이상한 URL 입력함")
  }
})

app.get('/edit/:id',  async (req, res)=> {
  let result = await db.collection('post').findOne({_id: new ObjectId(req.params.id)})
  console.log(result)
  res.render('edit.ejs', {result:result})
})

app.put('/edit',  async (req, res)=> {
  // db.collection('post').updateOne( { _id : 1  }, {$inc: { like:1 }})
  db.collection('post').updateOne( { _id : new ObjectId(req.body.id)  }, {$set: { title : req.body.title, content: req.body.content }})

  console.log(req.body)
  res.redirect('/list')
})

app.delete('/delete', async (req, res) => {
  await db.collection('post').deleteOne({ _id :new ObjectId(req.query.docid)  })
  res.send('삭제완료')
})

app.get('/list/:id', async (req, res) => {
  let result = await db.collection('post').find().skip((req.params.id -1)*5).limit(5).toArray();
  res.render('list.ejs', { 글목록 : result })
})


app.get('/login', async (req, res) => {
  console.log(req.user)
  res.render('login.ejs')
})

app.post('/login', async (req, res, next) => {
  passport.authenticate('local', (error, user, info)=>{
    if (error) return res.status(500).json(error)
    if (!user) return res.status(401).json(info.message) 
    req.login(user, (err)=> {
    if (err) return next(err)
  res.redirect('/')
}) 
  })(req, res, next)
})

app.get('/register', async (req, res) => {
  res.render('register.ejs')
})

app.post('/register', async (req, res) => {
  let 해시 = await bcrypt.hash(req.body.password, 10)

  await db.collection('user').insertOne({
    username : req.body.username,
    password : 해시
  })
  res.redirect('/')
})

app.use('/shop', require('./routes/shop.js'))

app.get('/search', async (req, res) => {
  console.log(req.query.val)
  let result = await db.collection('post').find({$text : {$search: req.query.val}}).toArray()
  res.render('search.ejs', {글목록 : result})
})