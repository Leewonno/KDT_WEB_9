// const User = require("../model/Muser");
const models = require("../models/index");

exports.main = (req, res)=>{
    res.render("index");
}

exports.user = (req, res)=>{
    res.render("index");
}

exports.signin = (req, res)=>{
    res.render("signin");
}

exports.postSignin = (req, res)=>{
    models.User.findOne({
        where:{
            userid:req.body.id,
            pw:req.body.pw
        }
    }).then((result)=>{
        if(result==null){
            res.send({result:false})
        }
        else{
            res.send({result:true})
        }
    })
}

exports.signup = (req, res)=>{
    res.render("signup");
}

exports.postSignup = (req, res)=>{
    models.User.create({
        userid:req.body.id,
        name:req.body.name,
        pw:req.body.pw
    }).then(()=>{
        res.send({result:true});
    })
}

exports.postProfile = (req, res)=>{
    models.User.findOne({
        where:{
            userid:req.body.id,
        }
    }).then((result)=>{
        console.log(result);
        if(result==null){
            res.send({result:false})
        }
        else{
            res.render("profile",{data:result})
        }
    })
}

exports.postProfileEdit = (req, res)=>{
    // 객체 분해할당
    const {id, name, pw} = req.body;
    models.User.update({
        userid:id,
        name:name,
        pw:pw
    },{
        where:{
            userid:id
        }
    }).then((result)=>{
        res.send({result:true});
    })
}

exports.postProfileDelete = (req, res)=>{
    models.User.destroy({
        where:{
            userid:req.body.id
        }
    }).then((result)=>{
        res.send({result:true});
    })
}