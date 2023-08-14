const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// cookie-parser
// 일반 쿠키 & 암호화쿠키
// 일반쿠키
// app.use(cookieParser());
// 암호화쿠키
// 암호화코드는 유출되면 안된다.
app.use(cookieParser('wonno'));
// cookie 옵션 객체
const cookieConfig = {
    // httpOnly : 웹 서버를 통해서만 쿠키에 접근가능
    // 자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는 것을 차단
    // maxAge : 쿠키 수명 / 밀리초
    // expires : 만료날짜를 GMT 시간으로 설정
    // path : 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화 되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전공
    // 즉 쿠키가 전송될 URL 특정 가능(기본값 : /)
    // domain : 쿠키가 전송될 도메인을 특정 가능 (기본값 : 현재도메인)
    // secure : 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
    // signed : 쿠키의 암호화 결정 (req.signedCookies 객체에 들어있음)
    signed:true, //암호화할경우 true로 설정해줘야한다.
    httpOnly:true,
    maxAge: 60 * 1000, //1분
    // path:"/setCookie", //setCookie 하위 에서만 쿠키가 나타남

};

app.get('/', (req, res) =>{
    res.render("index");
})

app.get("/cookie", (req, res)=>{
    // console.log(req.signedCookies)
    if(req.signedCookies.myCookie == null){
        res.render("실습1", {result:false});
    }
    else{
        res.render("실습1", {result:true});
    }
})

app.post("/cookie/check", (req, res)=>{
    console.log(req.body);
    if(req.body.id){
        res.cookie('myCookie', 'myValue', cookieConfig);
        res.send({result:true});
    }
})

app.get('/setCookie', (req, res) =>{
    // '쿠키이름', '쿠키값', '옵션'
    res.cookie('myCookie', 'myValue', cookieConfig);
    res.send("set cookie");
})

app.get('/getCookie', (req, res) =>{
    // res.send(req.cookies);
    res.send(req.signedCookies);
})

app.get('/clearCookie', (req, res) =>{
    res.clearCookie('myCookie', 'myValue', cookieConfig); //쿠키만들때와 똑같이 들어가야한다.
    res.send("clearCookie");
})


app.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`)
})

// app.use("")