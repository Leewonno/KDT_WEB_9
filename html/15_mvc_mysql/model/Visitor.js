const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user:'wonno',
    password: '1234',
    database:'kdt9',
})

exports.getVisitor = (cb) =>{
    conn.query(`select * from visitor`, (err, rows)=>{
        if(err){
            throw err;
        }

        console.log("Visitor.js", rows);
        cb(rows)
    })
}

exports.getVis = () =>{
    return [
        {id:1, name:"홍길동", comment:"내가 왔다"},
        {id:2, name:"길동이", comment:"내가 왔슈"},
        {id:3, name:"춘향이", comment:"여기가 어디"}
    ]
}