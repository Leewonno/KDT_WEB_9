const express = require("express");
const app = express();
const PORT = 8000;

const db = require("./models/index");


app.set("view engine", "ejs");
app.set("views", "./views"); //원래 기본값. 따로 폴더이름을 바꿀게아니면 쓰지 않아도 된다.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./router/index");
app.use("/", router);

const studentRouter = require("./router/student");
app.use("/student", studentRouter);

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://127.0.0.1:${PORT}`)
    })
})

