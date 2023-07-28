const express = require("express");
// import express from 'express' //type 을 module 로 바꿔줘야사용가능
const app = express();
const PORT = 8000;

// 코드 순서가 중요하다.

// 뷰엔진을 ejs로 설정하겠다.
app.set("view engine", "ejs");
// 폴더 지정 views 폴더에 있는 ejs 파일들을 열어라
app.set("views", "./views");

// 정적인 파일 불러오기
app.use('/static', express.static('./static'));
app.use('/img', express.static('./static/img'));
app.use('/js', express.static('./static/js'));

// get 방식으로 통신했다.
// post 방식을 원하면 post로
// 첫번째 값은 url
app.get('/', (req, res) =>{
    // send() 는 클라이언트에 응답데이터를 보낼 때 사용한다.

    // res.send("Hello Express");
    // 객체 형태로도 보낼 수 있다. // JSON 방식 // 이런식으로 데이터를 보내기도한다.
    // 객체 안에 객체도 넣을 수 있다.
    res.send({result: true, code: 1000, message: "회원가입성공", data:{name:"이원노", age:23}})
})

app.get('/kdt9', (req, res) =>{
    // render() 뷰 엔진 랜더링
    // render는 두번째 인자로 데이터를 보낼 수 있다.
    // ejs의 이름만 지정해주면 된다.
    res.render("test", {name: 'leewonno'});
    // res.send("Hello Express KDT9");
})

app.get('/ebr', (req, res) =>{
    res.render("230728_실습1");
})

app.get('/fruits', (req, res) =>{
    res.render("230728_실습2");
})

app.get('/fruits2', (req, res) =>{
    res.render("test/230728_실습2");
})

app.get('/gugudan', (req, res) =>{
    res.render("230728_실습3", {gugu: [2, 3, 4, 5, 6, 7, 8, 9]});
})

app.get('/four', (req, res) =>{
    res.render("230728_실습4", {src:"img/apple.webp"});
})
app.get('/four1', (req, res) =>{
    res.send("실습4 1");
})
app.get('/four2', (req, res) =>{
    res.send("실습4 2");
})
app.get('/four3', (req, res) =>{
    res.send("실습4 3");
})

// listen은 서버를 열어준다.
app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})
