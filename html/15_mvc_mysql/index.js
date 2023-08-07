const express = require("express");
const app = express();
const PORT = 8000;

const mysql = require("mysql");

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

const conn = mysql.createConnection({
    host: 'localhost',
    user:'wonno',
    password: '1234',
    database:'kdt9',
    // port:3306 //다 문자인데 포트만 숫자, 포트가 변경되었을 시 이용
})

conn.connect((err)=>{
    if(err){
        console.log("ERROR");
        return
    }
    console.log("CONNECT");
})

// exports.getVisitor = (cb) =>{
//     conn.query(`select * from visitor`, (err, rows)=>{
//         if(err){
//             throw err;
//         }

//         console.log("Visitor.js", rows);
//         cb(rows)
//     })
// }

// const router = require("./routers/index");
// app.use('/', router);

app.get('/', (req, res)=>{
    res.render("index");
})

app.get('/visitor', (req, res)=>{
    const query = "SELECT * FROM visitor";
    conn.query(query, (err, rows)=>{
        console.log(rows);
        res.render("visitor", {data:rows});
    })
    
})

// GET 방명록 하나 조회
app.get('/visitor/get', (req, res)=>{
    res.send("방명록 하나 조회");
})

// POST 방명록 하나 생성
app.post('/visitor/write', (req, res)=>{
    const query = `insert into visitor (name, comment) values ("${req.body.name}", "${req.body.comment}")`
    conn.query(query, (err, rows)=>{
        console.log(rows);
        res.send({id:rows.insertId, name:req.body.name, comment:req.body.comment});
    })
    
})

// PATCH 방명록 하나 수정
app.patch('/visitor/edit', (req, res)=>{
    res.send("방명록 하나 수정");
})

// DELETE 방명록 하나 삭제
app.delete('/visitor/delete', (req, res)=>{
    res.send("방명록 하나 삭제");
})

app.use("*", (req, res)=>{
    res.render("404");
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1${PORT}`);
})