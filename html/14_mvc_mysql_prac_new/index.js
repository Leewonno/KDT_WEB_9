const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/index");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

const router = require("./route/user");
const { required } = require("nconf");
app.use('/', router);

app.use("*", (req, res)=>{
    res.render("404");
})

db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`127.0.0.1:${PORT}`)
    })
})

