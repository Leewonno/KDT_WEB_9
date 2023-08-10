// const Visitor = require("../model/Visitor");
const models = require("../models/index");

exports.main = (req, res)=>{
    res.render("index");
}

// 전체 방명록 조회
// select * from visitor = findAll()
exports.visitor = (req, res)=>{
    models.Visitor.findAll({
        limit:10,
    }).then((result)=>{
        res.render("visitor", {data:result});
        // res.send({data : result});
    });
}

// 하나만 조회
exports.visitorOne = (req, res)=>{
    models.Visitor.findOne({
        where:{ id: req.query.id }
    }).then((result)=>{
        res.render("visitor", {data:[result]});
    })
}

// Insert
exports.visitorInsert = (req, res)=>{
    models.Visitor.create({
        name:req.body.name,
        comment:req.body.comment
    }).then((result)=>{
        console.log(result);
        res.send({id:result.id, name:req.body.name, comment:req.body.comment});
    })
}

exports.visitorModify = (req, res)=>{
    models.Visitor.update({
        name:req.body.name,
        comment:req.body.comment,
    },
    {
        where:{ id:req.body.id }
    }).then((result)=>{
        res.send({result:true});
    })
}

exports.visitorDelete = (req, res)=>{
    models.Visitor.destroy({
        where:{
            id:req.body.id
        }
    }).then((result)=>{
        res.send({result:true});
    })
}