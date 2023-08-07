const Infor = require("../model/m");

exports.main = (req, res)=>{
    res.render("index");
}

exports.axget = (req, res)=>{
    res.render("230802_실습2");
}

exports.axpost = (req, res)=>{
    console.log('back:', req.body);
    if(Infor.data.id == req.body.id && Infor.data.pw == req.body.pw){
        res.send({result : true});
    }
    else{
        res.send({result : false});
    }
}