const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

const router = require("./route/user");
app.use('/', router);

app.use("*", (req, res)=>{
    res.render("404");
})

app.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`)
})