const Infor = require("../model/Visitor");

exports.main = (req, res)=>{
    res.render("index");
}

exports.visitor = (req, res)=>{
    res.render("visitor", {data:Infor.getVis()});
}