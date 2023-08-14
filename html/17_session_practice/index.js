const express = require("express");
const session = require('express-session');
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const secret = 'wonnoKey';

app.use(session({
        secret:'secret',
        resave:false,
        saveUninitialized:true,
        name:"mySession",
        Cookie:{
            maxAge:60*1000,
            httpOnly:true
        }
    })
);

const userInfo = {id:'dldnjssh123', pw:'1234'};

app.get('/', (req, res)=>{
    
    // console.log(req.headers)
    // console.log(req.session);

    // const auth = req.headers.authorization;
    // const token = auth.split(" ");

    res.render("index");
})

app.post('/', (req, res)=>{
    
})

app.get('/login', (req, res)=>{

    if(req.headers.authorization){
        const auth = req.headers.authorization;
        const token = auth.split(" ");

        if(token[0] === "Bearer"){
            jwt.verify(token[1], secret, (err, decoded)=>{
                if(err){
                    return res.status(403).send({message:"검증 실패"});
                }
                res.send({isLogin:true, user:decoded.id});
            });
        }
        else{
            res.send({isLogin:false});
            // res.send();
        }
    }
    else{
        res.render("login", {isLogin:false});
    }
    
})

app.post('/login', (req, res)=>{
    // 로그인이 되는 경우
    if(req.body.id == userInfo.id && req.body.pw == userInfo.pw){
        const token = jwt.sign({id:req.body.id}, secret);
        res.send({result:true, token});
        // res.redirect("/");
    }
    else{
        res.send(`<script>alert("로그인 실패!"); document.location.href='/'</script>`)
    }   
    
})

app.get('/logout', (req, res)=>{
    const user = req.session.token;
    if(user == undefined){
        res.send("<script>alert('잘못된 접근입니다.'); document.location.href = '/';</script>")
    }
    else{
        req.session.destroy(()=>{
            res.redirect('/');
        })
    }
    // res.render("login");
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`);
})