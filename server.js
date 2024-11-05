// 라이브러리 불러오기
const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

// 3000번 포트에서 서버를 실행할거야
http.listen(3000, () => {
  // 서버가 정상적으로 실행되면 콘솔창에 이 메시지를 띄워줘
  console.log("Listening on 3000");
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
})
app.use(express.json());
const cors = require('cors');
app.use(cors());