const mysql = require('mysql');
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

exports.getVisitor = (cb) =>{
    const query = "SELECT * FROM visitor";
    conn.query(query, (err, rows)=>{
        console.log(rows);
        cb(rows);
    })
}

exports.getVisitorOne = (id, cb) =>{
    const query = `SELECT * FROM visitor where id=${id}`;
    conn.query(query, (err, rows)=>{
        console.log(rows);
        cb(rows);
    })
}

exports.insertVisitor = (body, cb) =>{
    const query = `insert into visitor (name, comment) values ("${body.name}", "${body.comment}")`
    conn.query(query, (err, rows)=>{
        console.log(rows);
        cb(rows);
    })
}

exports.modifyVisitor = (body, cb) =>{
    const query = `update visitor set name="${body.name}", comment="${body.comment}" where id=${body.id}`;
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err);
            cb({result:false})
        }
        else{
            cb({result:true})
        }
    })
}

exports.deleteVisitor = (body, cb) =>{
    const query = `delete from visitor where id=${body.id}`
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err);
            cb({result:false});
        }
        else{
           cb({result:true});
        }
    })
}

// exports.getVis = () =>{
//     return [
//         {id:1, name:"홍길동", comment:"내가 왔다"},
//         {id:2, name:"길동이", comment:"내가 왔슈"},
//         {id:3, name:"춘향이", comment:"여기가 어디"}
//     ]
// }