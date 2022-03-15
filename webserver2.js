const http = require('http');
// require : http로드

const hostname = '127.0.0.1';
const port = 1338;

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world \n');
});
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
}); // 이 서버가 어떻게 들어온 사용자의 응답을 받을 것인가
// 시간이 걸릴 수 있으므로 콜백함수를 통해 비동기로 작동
