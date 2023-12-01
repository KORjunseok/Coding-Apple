const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public'));

app.listen(8080, ()=> {
  console.log('http://localhost:8080 에서 서버 실행 중 ')
})

app.get('/', (요청, 응답)=> {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/news', (req, res) => {
  res.send('뉴스 볼래')
})

app.get('/shop', (req, res) => {
  res.send('쇼핑페이지임')
})

app.get('/about', (요청, 응답)=> {
  응답.sendFile(__dirname + '/index2.html')
})