const User = require("../model/Muser");

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
    User.loginUser(req.body, (rows)=>{
        console.log(rows);
        res.send(rows)
    })
}

exports.signup = (req, res)=>{
    res.render("signup");
}

exports.postSignup = (req, res)=>{
    User.insertUser(req.body, (rows)=>{
        res.send(rows)
    })
}

exports.postProfile = (req, res)=>{
    console.log("req-body: ",req.body)
    User.viewUser(req.body, (rows)=>{
        res.render("profile", {data:rows})
    })
}

exports.postProfileEdit = (req, res)=>{
    User.editUser(req.body, (rows)=>{
        res.send(rows);
    })
}

exports.postProfileDelete = (req, res)=>{
    User.deleteUser(req.body, (rows)=>{
        res.send(rows);
    })
}