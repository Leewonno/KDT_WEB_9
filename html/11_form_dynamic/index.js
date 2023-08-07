const express = require("express");
const app = express();
const PORT = 8000;

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");


// router
const router = require("./routes/index");
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})


// 230807 MVC 실습으로 아래 내용은 실습 이전 내용 
// const express = require("express");
// const app = express();
// const PORT = 8000;

// //body parser
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

// app.set("view engine", "ejs");
// app.set("views", "./views");


// // router
// app.get('/', (req, res)=>{
//     res.render("index");
// })

// app.get('/ajax', (req, res)=>{
//     console.log('back:', req.query);
//     // res.send(req.query);
//     res.send({result:true, userInfor:req.query});
// })

// app.post('/ajax', (req, res)=>{
//     console.log('back:', req.body);
//     res.send(req.body);
// })

// app.get('/axios', (req, res)=>{
//     console.log('back:', req.query);
//     res.send(req.query);
//     // res.send({result:true, userInfor:req.query});
// })

// app.post('/axios', (req, res)=>{
//     console.log('back:', req.body);
//     res.send(req.body);
// })

// app.get('/fetch', (req, res)=>{
//     console.log('back:', req.query);
//     res.send(req.query);
// })

// app.post('/fetch', (req, res)=>{
//     console.log('back:', req.body);
//     res.send(req.body);
// })

// // 실습
// app.get('/regist', (req, res)=>{
//     res.render("230802_실습1");
// })

// let idt = "dldnjssh123";
// let pwt = "1234";

// app.get('/regist_2', (req, res)=>{
//     res.render("230802_실습2");
// })

// app.post('/axios2', (req, res)=>{
//     console.log('back:', req.body);
//     if(idt == req.body.id && pwt == req.body.pw){
//         res.send({result : true});
//     }
//     else{
//         res.send({result : false});
//     }
// })

// app.listen(PORT, ()=>{
//     console.log(`http://127.0.0.1:${PORT}`);
// })