const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/upload', express.static(__dirname + '/upload'));

app.set("view engine", "ejs");
app.set("views", "./views");

// multer 설정 / body-parser 밑에다가
const upload = multer({
    // dest : 업로드할 파일을 저장할 경로를 지정
    dest: 'upload/',
});

const uploadDetial = multer({
    // storage 에서는 미리 폴더를 직접 만들어둬야한다.
    // diskStorage : 파일을 디스크에 저장히기 위한 모든 제어 기능을 제공한다.
    storage: multer.diskStorage({
        destination(req, file, done){
            // 첫번째는 에러처리
            done(null, 'upload/');
        },
        filename(req, file, done){
            // 확장자만 가져오기
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
            const ext = path.extname(file.originalname);
            console.log("ext : ", ext);
            // path.basename(file.originalname, ext) : 확장자가 없어진 원래 이름만 남는다
            // let filename = path.basename(file.originalname, ext) + Date.now() + ext;
            let filename = req.body.id + ext;
            // let filename = Date.now() + ext;
            done(null, filename);
        },
    }),
    // 5MB
    limits: {fileSize: 5 * 1024 * 1024},
});


app.get('/', (req, res)=>{
    res.render("index");
})

// single안에는 form의 name 값
// 파일을 여러개를 할거면 single을 array로 file을 files로 변경
app.post('/upload', uploadDetial.single('userfile'), (req, res)=>{
    console.log(req.body);
    console.log(req.file);
})

// 멀티 ver1
app.post('/upload/array', uploadDetial.array('userfiles'), (req, res)=>{
    console.log(req.body);
    console.log(req.files);
})

// 멀티 ver2
// 두개를 받을 거기 때문에 객체 배열 두개를 만듦(fields에)
app.post('/upload/field', uploadDetial.fields([{name:'userfile1'}, {name:'userfile2'}]), (req, res)=>{
    console.log(req.body);
    console.log(req.files);
})

// 동적파일 업로드
app.post('/dynamicFile',uploadDetial.single('dynamic-file'), (req, res)=>{
    res.send(req.file);
})

// 실습1

app.get('/pr1', (req, res)=>{
    res.render("230803_실습1");
})

app.post('/upload_1', uploadDetial.single('pt'), (req, res)=>{
    res.render("230803_실습1_결과", {data:req.body, file:req.file});
    console.log(req.body)
    console.log(req.file)
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`);
})