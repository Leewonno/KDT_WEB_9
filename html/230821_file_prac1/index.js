const express = require('express');
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
console.log(__dirname);

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, 'uploads/');
    },
    filename: (req, file, callback)=>{
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        const ext = path.extname(file.originalname);
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

// app.post('/upload', uploadDetial.single('userfile'), (req, res)=>{
//     console.log(req.file);
//     res.send(req.body);
// })

// // 한번에 여러개 //array(name, 최대파일개수)
// app.post('/upload/array', uploadDetial.array('userfile', 2), (req, res)=>{
//     console.log(req.files);
//     res.send(req.body);
// })

// // 한번씩 여러개 //maxCount : 최대파일개수
// app.post('/upload/fields', uploadDetial.fields([{name:"userfile1", maxCount:2}, {name:"userfile2"}]), (req, res)=>{
//     console.log(req.files);
//     res.send(req.body);
// })

// 동적폼 // 동적(비동기)
app.post('/dynamicFile',uploadDetial.array('dynamic-file'), (req, res)=>{
    console.log(req.files);
    res.send(req.files);
})

app.use('*', (req, res)=>{
    res.render("404");
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
