const router = require('express').Router()

let connectDB = require('./../database.js')
// let connectDB = require('./database.js')

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

router.get('/shirts', async (req, res) => {
  await db.collection('post').find().toArray()
  res.send('셔츠파는 페이지임')
})

router.get('/pants',  (req, res) => {
  res.send('바지파는 페이지임')
})

module.exports = router