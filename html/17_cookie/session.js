const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "./views");

// 세션 옵션 객체
// httpOnly: 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
// secure: 값을 true로 하면 https에서만 세션을 주고받음
// secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
// 세션을 발급할 때 사용되는 키
// resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지. (덮어쓰기 할건지)
// 세션을 항상 저장할 건지 저장 (보통 false 권장)
// saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
// cookie
app.use(session({
    secret: 'mySessionSecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        maxAge:60*1000,
    }
}))

app.get('/', (req, res)=>{
    // 세션 설정 req.session.key
    req.session.name = '홍길동';
    res.render('index')
    // res.send("세션 설정 완료");
})

app.get('/login', (req, res)=>{
    req.session.name = '이원노';
    console.log(req.session.name)
    // res.send({result:true});
    res.redirect('/session');
})

app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/session');
    })
})

app.get("/session", (req, res)=>{
    if(req.session.name == null){
        res.render("실습2", {result:false});
    }
    else{
        res.render("실습2", {result:true, data:req.session.name});
    }
})

app.get('/name', (req, res)=>{
    res.send({id:req.sessionID, name:req.session.name})
})

app.get('/destroy', (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/name');
    })
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})