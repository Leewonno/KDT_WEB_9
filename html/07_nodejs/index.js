// const md = require("./module.js") // .js 는 생략가능
// console.log(md);


// 필요한 키의 값만 가지고 오기
// const {a, b} = require("./module.js") // .js 는 생략가능

// // import {a, b} from './module.js'
// console.log(a, b);

const http = require("http");
const fs = require("fs");

// 요청(req)이 응답(res)보다 먼저와야한다. 
const server = http.createServer(function(req, res){
    // res.writeHead(200);
    // res.write("<h1>Hello World</h1>");
    // res.end("<p>End</p>")

    // 파일전송
    try{
        // index.html 파일을 읽어와라
        const data = fs.readFileSync("./index.html")
        res.writeHead(200);
        res.end(data);
    }
    catch(err){
        console.log(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

// listen이 서버를 열어줌
// 433 -> https 포트 / 80 -> http 포트 / 3306 -> mysql 포트
server.listen(8000, function(){
    console.log("8000번 포트로 실행");
})