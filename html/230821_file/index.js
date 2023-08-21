const express = require('express');
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
// extended : 중첩된 객체표현을 허용할지 말지 정함
// application/x-www form-urlencoded
app.use(express.json());
// application/json

//router

// use는 http전송방식을 이해하지 못함
// 같은 url로 get, post 만들 수 있지만 use로는 접근 불가능

// 서버 실행시 http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));
console.log(__dirname);

// multer
// diskStorage : 파일 저장 관련 설정 객체
const storage = multer.diskStorage({
    // destination : 저장될 경로를 지정(요청객체, 업로드된 파일객체, 콜백함수)
    destination:(req, file, callback)=>{
        // 첫번째는 에러처리
        callback(null, 'uploads/');
    },
    // filename : 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, callback)=>{
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        const ext = path.extname(file.originalname);
        // basename : 파일이름 추출(파일이름, 제외할 확장자);
        // const basename = path.basename(file.originalname, ext) + Date.now() + ext;
        let filename = Date.now() + file.originalname;
        callback(null, filename);
    }
})

// 파일 크기 제한
const limits = {
    fileSize: 5 * 1024 * 1024
}

const uploadDetial = multer({storage, limits});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', uploadDetial.single('userfile'), (req, res)=>{
    console.log(req.file);
    res.send(req.body);
})

// 한번에 여러개
app.post('/upload/array', uploadDetial.array('userfile'), (req, res)=>{
    console.log(req.files);
    res.send(req.body);
})

// 한번씩 여러개
app.post('/upload/fields', uploadDetial.fields([{name:"userfile1"}, {name:"userfile2"}]), (req, res)=>{
    console.log(req.files);
    res.send(req.body);
})

app.use('*', (req, res)=>{
    res.render("404");
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
