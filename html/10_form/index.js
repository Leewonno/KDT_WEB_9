const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engien
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res)=>{
    res.render("index", {title : "폼 전송 실습"});
})

app.get("/getForm", (req, res)=>{
    console.log(req.query);
    res.render("result", {
        title:"GET 요청 폼 결과 확인",
        userInfor: req.query
    });
    // res.send(req.query);
})

app.get("/getSign", (req, res)=>{
    res.render("230801_실습1");
})

app.get('/postSign', (req, res) =>{
    res.render("230801_실습2");
})

app.get("/getResult", (req, res)=>{
    console.log(req.query);
    res.render("result_1", {
        title:"GET 요청 폼 결과 확인",
        userInfor: req.query
    });
})

app.post('/postForm', (req, res) =>{
    console.log(req.body)
    res.render("result", {
        title:"POST 요청 폼 결과 확인",
        userInfor: req.body
    });
})


app.post('/postResult', (req, res) =>{
    console.log(req.body)
    res.render("result_2", {
        title:"POST 요청 폼 결과 확인",
        userInfor: req.body
    });
})



app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})
