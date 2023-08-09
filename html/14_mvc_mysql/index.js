const express = require("express");
const app = express();
const PORT = 8000;

const mysql = require("mysql");

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user:'wonno',
//     password: '1234',
//     database:'kdt9',
//     // port:3306 //다 문자인데 포트만 숫자, 포트가 변경되었을 시 이용
// })



// exports.getVisitor = (cb) =>{
//     conn.query(`select * from visitor`, (err, rows)=>{
//         if(err){
//             throw err;
//         }

//         console.log("Visitor.js", rows);
//         cb(rows)
//     })
// }

const router = require("./routers/index");
const visitor = require("./routers/visitor");
app.use('/', router);
app.use('/visitor', visitor);

app.use("*", (req, res)=>{
    res.render("404");
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1${PORT}`);
})