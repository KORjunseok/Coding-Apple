const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public'));

const { MongoClient } = require('mongodb')

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
  res.send(result[0].title)

})