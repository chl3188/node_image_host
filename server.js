const express = require('express');
const path = require('path');

const app = express();

// public 디렉터리를 정적 파일로 서빙
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});