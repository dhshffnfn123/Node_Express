var express = require('express');
var app = express();

app.locals.pretty = true; // jade 코드 이쁘게 정렬
app.set('view engine', 'jade');
app.set('views', './views'); // 생략해도 가능
app.use(express.static('public')); // public은 디렉토리 명, 정적인 파일이 위치하는 곳
app.get('/topic', function (req, res) {
  var topics = ['Javascript is...', 'Nodejs is...', 'Express is...'];
  res.send(req.query.id);
});

app.get('/template', function (req, res) {
  res.render('temp', { time: Date(), _title: 'Jade' }); // 두번째 인자는 jade에서 사용할 변수를 객체로 넣어준다.
});
app.get('/', function (req, res) {
  // '/' 으로 접속하면 두번째인자를 실행
  // 두번째인자의 함수의 첫번째인자는 요청이고 두번째는 응답에 대한 객체를 전달해주기로 약속이 되있음
  res.send('Hello home page');
});
app.get('/dynamic', function (req, res) {
  var time = Date();
  var output = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        Hello Dynamic!<br>
        ${time}
      </body>
    </html>`;
  res.send(output);
});
app.get('/route', function (req, res) {
  res.send('Hello Router, <img src="/screenshot.png">');
});
app.get('/login', function (req, res) {
  res.send('LoginPage');
});
app.listen(3000, function () {
  console.log('connected 3000 port!');
});
