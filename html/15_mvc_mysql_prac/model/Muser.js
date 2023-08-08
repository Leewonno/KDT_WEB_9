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

exports.loginUser = (body, cb) =>{
    const query = `SELECT * FROM user where userid='${body.id}'`;
    conn.query(query, (err, rows)=>{
        if(rows.length == 0){
            // console.log(err);
            cb({result:false});
        }
        else{
            if(body.id == rows[0].userid && body.pw == rows[0].pw){
                cb({result:true});
            }
            else{
                cb({result:false});
            }
        }
        
    })
}

exports.insertUser = (body, cb) =>{
    const query = `insert into user (userid, name, pw) values ("${body.id}", "${body.name}", "${body.pw}")`
    conn.query(query, (err, rows)=>{
        console.log(rows);
        if(err){
            console.log(err);
            cb({result:false});
        }
        else{
            cb({result:true});
        }
        
    })
}

exports.viewUser = (body, cb)=>{
    console.log(body)
    const query = `SELECT * FROM user where userid='${body.id}'`;
    conn.query(query, (err, rows)=>{
        console.log(rows)
        console.log(rows[0].userid);
        if(err){
            console.log(err);
        }
        cb(rows);
    })
}

exports.editUser = (body, cb)=>{
    const query = `update user set userid="${body.id}", name="${body.name}", pw="${body.pw}" where userid='${body.id}'`;
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

exports.deleteUser = (body, cb)=>{
    const query = `delete from user where userid='${body.id}'`
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