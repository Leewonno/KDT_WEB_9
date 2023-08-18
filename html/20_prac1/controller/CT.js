const {User} = require("../models/index")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.main = (req, res)=>{
    res.render("index");
}


exports.login = (req, res)=>{
    res.render("login")
}

exports.postLogin = async (req, res)=>{
    try{
        const {id, pw} = req.body;

        const dbpw = await User.findOne({
            where:{
                userid:id,
            }
        })

        const dct = await comparePassword(pw, dbpw.dataValues.pw);
        if(dct){
            const token = jwt.sign({id}, "wonno");
            res.send({result:true, token});
        }
        else{
            res.send({result:false});
        }
    }
    catch(err){
        res.send({result:false});
        console.log(err);
    }
}

exports.signup = (req, res)=>{
    res.render("signup")
}

exports.postSignup = async (req, res)=>{
    try{
        const {userid, name, pw} = req.body;

        const dct = await bcryptPassword(pw);
        const result = await User.create({
            userid,
            name,
            pw:dct,
        })
        res.send({result:true});
    }
    catch(err){
        res.send({result:false});
    }
    
}

exports.profile = (req, res)=>{
    res.render("profile")
}

exports.postProfile = (req, res)=>{
    jwt.verify(req.body.token, "wonno", (err, decoded)=>{
        if(err){
            return res.status(403).send({message:"검증 실패"});
        }
        console.log("decoded:", decoded);

        User.findOne({
            where:{
                userid:decoded.id,
            }
        }).then((result)=>{
            res.send({id:result.userid, name:result.name});
        })
    });
}

exports.modifyUserNew = async (req, res)=>{
    const {userid, pw, name} = req.body;
    const dct = await bcryptPassword(pw);
    User.update({
        userid,
        name,
        pw:dct,
    },
    {
        where:{ userid }
    }).then((result)=>{
        res.send({result:true});
    }).catch((err)=>{
        console.log(err);
        res.send({result:false});
    })
}

exports.modifyUser = async (req, res)=>{
    const {userid, name} = req.body;
    User.update({
        userid,
        name,
    },
    {
        where:{ userid }
    }).then((result)=>{
        res.send({result:true});
    }).catch((err)=>{
        console.log(err);
        res.send({result:false});
    })
}

// 암호화
const bcryptPassword = (password) =>{
    return bcrypt.hash(password, 10);
}

// 비교
const comparePassword = (password, dbPassword) =>{
    return bcrypt.compare(password, dbPassword);
}