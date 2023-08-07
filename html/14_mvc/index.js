const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 파일 이름이 index라면 index 생략해도 된다.
const router = require("./routes/index.js");
app.use('/', router);
// ex)
// const userRouter = require("./routes/user");
// app.use('./user', userRouter);




// 맨마지막 선언
app.use('*', (req, res)=>{
    res.render('404');
    console.log("Error페이지 열림");
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})