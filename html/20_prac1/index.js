const express = require("express");
const app = express();
const PORT = 8000;

const db = require("./models/index");

app.use(express.urlencoded({extended:true}));
// extended를 true로 놓고 사용하는 이유
// extended 옵션 : 중첩된 객체 표현의 허용여부
// true는 qs모듈 사용 {person: {name:'bobby', age:'3'}}
// false는 query-string모듈 사용 {'person'[name]} ?? 이거 다시 수정
app.use(express.json());

app.set("view engine", "ejs");

const router = require("./route/index");
app.use('/', router)

app.use("*", (req, res)=>{
    res.render("404");
})

db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`127.0.0.1${PORT}`);
    })
})