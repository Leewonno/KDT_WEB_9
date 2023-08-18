const express = require("express");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 8000;

// 환경변수 설정 불러오기
require('dotenv').config();

let dbPassword = ''
// 인코딩은 뭘로하든 자유 hex, base64

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.NAME);
    res.render("index");
})

app.post('/verify', (req, res)=>{
    const {pw} = req.body;
    // const compare = createPbkdf(pw);
    // timingSafeEqual : 두개의 버퍼를 상수시간으로 비교하는 함수
    // const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64'));
    // res.send({result:verifyPassword(pw, salt, dbPassword)})
    const compare = comparePassword(pw, dbPassword);
    console.log(dbPassword);
    res.send(compare);
})

app.post('/login', (req, res)=>{
    const {id, pw} = req.body;
    // const pass = createHashedPassword(pw);
    // dbPassword = createPbkdf(pw);
    dbPassword = bcryptPassword(pw);
    res.json({dbPassword})
    // res.send(pass);
})

app.post('/cipher', (req, res)=>{
    const {data} = req.body;
    const encrypt = cipherEncrypt(data);
    const decrypt = decipher(encrypt);
    res.send({data:decrypt});
    
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`);
})

// 단방향
// 해시함수
const createHashedPassword = (password) =>{
    // createHash : 지정한 알고리즘을 이용하여 해시 생성
    return crypto.createHash("sha512").update(password).digest("base64");
}

const salt = crypto.randomBytes(16).toString('hex'); //솔트생성
const iterations = 1000; //반복횟수
const keylen = 64 //생성할 키의 길이
const algo = process.env.HASH;

//단방향
//pbkdf2함수
const createPbkdf = (password) =>{
    // pdkdf2Sync : (Sync가 붙으면 동기) 비밀번호 기반 키도출함수
    // (비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성
    // 반환값은 Buffer값
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, algo);
    console.log(hash);
    return hash.toString('base64');
}

// 암호 비교
const verifyPassword = (password, salt, dbPassword) =>{
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, algo).toString('base64');
    if(compare === dbPassword){
        return true;
    }else{
        return false;
    }
}

// 양방향
// 암호화
// 대칭키 알고리즘
const algorithm = 'aes-256-cbc'; // 256비트 키를 사용, 블록크기는 128비트
const yKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //초기화벡터, 데이터블록을 암호화할때 보완성을 높이기 위해 사용

// 비밀번호가 아니라 보통 문서를 주고 받음
const cipherEncrypt = (word)=>{
    const cipher = crypto.createCipheriv(algorithm, yKey, iv) // 암호화 객체 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64'); // 암호화할 데이터 처리
    console.log("1:",encryptedData);
    encryptedData += cipher.final('base64'); //최종결과 생성
    console.log("2:",encryptedData);
    return encryptedData;
}

// 복호화
const decipher = (encryptedData) =>{
    const decipher = crypto.createDecipheriv(algorithm, yKey, iv); // 복호화 객체 생성
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');
    console.log("Decryted :",decryptedData);
    return decryptedData;
}

// bcrypt (단방향)
const saltNum = 10;

// 암호화
const bcryptPassword = (password) =>{
    return bcrypt.hashSync(password, saltNum);
}

// 비교
const comparePassword = (password, dbPassword) =>{
    return bcrypt.compareSync(password, dbPassword);
}