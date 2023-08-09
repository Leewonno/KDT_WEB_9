// const mysql = require('mysql');
import mysql from "mysql2/promise";

//mysql 연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'wonno',
    password: '1234',
    database: 'kdt9',
    port: 3306,
});
// 연결방식이 다르다
// createConnection : 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성
// 연결수가 많아지면 성능에 영향이 생긴다.
// createPool : 여러연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올따마다 생성한 연결을 할당. 동시처리 가능.

export const post_signup = async (data) => {
    try{
        // 준비된 쿼리 방식 // 쿼리를 미리 생성하고 데이터를 나중에 전송한다.
        const query = 'insert into user (userid, pw, name) values (?, ?, ?)';
        await conn.query(query, [data.userid, data.pw, data.name]);

    } catch(err){
        console.log(err);
    }
}

export const post_signin = async (data) =>{
    try{
        const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
        const [rows] = await conn.query(query, [data.userid, data.pw]);
        console.log(rows);
        return rows;
    }catch(err){
        console.log(err);
    }
}

export const post_profile = async (data)=>{
    try{
        const query = 'SELECT * FROM user WHERE userid= ? ';
        const [rows] = await conn.query(query, [data.userid]);
        return rows;
    } catch(err){
        console.log(err);
    }
}

export const edit_profile = async (data) =>{
    try{
        const query = 'UPDATE user SET userid=?, pw=?, name=? WHERE id=?';
        await conn.query(query, [data.userid, data.pw, data.name, data.id]);
    }catch(err){
        console.log(err);
    }
    
}

// export const edit_profile = (data, callback) => {
//     const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };

export const delete_profile = async(data) =>{
    try{
        const query = `DELETE FROM user WHERE id=?`;
        await conn.query(query, [data]);
    }catch(err){
        console.log(err);
    }
}

