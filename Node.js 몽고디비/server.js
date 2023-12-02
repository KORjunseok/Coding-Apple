const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const { MongoClient, ObjectId } = require('mongodb')

let db
const url = 'mongodb+srv://sparta:test@cluster0.p7hon5t.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(8080, ()=> {
    console.log('http://localhost:8080 에서 서버 실행 중 ')
  })
}).catch((err)=>{
  console.log(err)
})

app.get('/', (요청, 응답)=> {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/news', (req, res) => {
  db.collection('post').insertOne({title : '어쩌구'})
  // res.send('오늘 눈올까?')
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

app.post('/add', async (req, res) => {
  console.log(req.body)

 
  try {
    if(req.body.title == ''){
      res.send('제목 입력해 주세요')
    } else {
      await db.collection('post').insertOne({title : req.body.title, content :  req.body.content})
    res.redirect('/list')
    }
  } catch(e) {
    console.log(e)
    res.status(500).send('서버 에러 발생 ')
    }
})

app.get('/detail/:aaaa',  (req, res)=> {
  // let result = await db.collection('post').findOne({ _id: new ObjectId('6569ba2d5c37bf5d0c3dcff1')})

  console.log(req.params)
   res.render('detail.ejs')
})