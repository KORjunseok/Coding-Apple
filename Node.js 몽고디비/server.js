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