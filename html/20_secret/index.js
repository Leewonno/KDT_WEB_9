const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 8000;

let pass = ''
// 인코딩은 뭘로하든 자유 hex, base64
const salt = crypto.randomBytes(16).toString('hex'); //솔트생성
const leng = 1000; //반복횟수
const key = 64 //생성할 키의 길이
const algo = 'sha512';

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/verify', (req, res)=>{
    const {pw} = req.body;
    
    // const pass2 = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString("base64");
    // console.log("pass :", pass);
    // console.log("pass2 :", pass2)

    const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo);
    console.log("compare :", compare)
    console.log("buf:", Buffer.from(pass, 'base64'))
    // timingSafeEqual : 두개의 버퍼를 상수시간으로 비교하는 함수
    const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64'));
    res.send(result);
})

app.post('/login', (req, res)=>{
    const {id, pw} = req.body;
    // createHash : 지정한 알고리즘을 이용하여 해시 생성
    // const password = crypte.createHash("sha512").update(pw).digest("base64");

    // pdkdf2Sync : (Sync가 붙으면 동기) 비밀번호 기반 키도출함수
    pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString("base64");
    res.send(pass);
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`);
})