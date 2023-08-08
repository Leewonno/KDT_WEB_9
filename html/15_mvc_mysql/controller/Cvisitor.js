const Visitor = require("../model/Visitor");

exports.main = (req, res)=>{
    res.render("index");
}

exports.visitor = (req, res)=>{
    Visitor.getVisitor((rows)=>{
        res.render("visitor", {data:rows});
    });
    // res.render("visitor", {data:Visitor.getVisitor()});
}
//res.render("visitor", {data:Visitor.getVis()});

exports.visitorOne = (req, res)=>{
    Visitor.getVisitorOne(req.query.id, (rows)=>{
        res.render("visitor", {data:rows});
    });
}

exports.visitorInsert = (req, res)=>{
    Visitor.insertVisitor(req.body, (rows)=>{
        res.send({id:rows.insertId, name:req.body.name, comment:req.body.comment});
    });
}

exports.visitorModify = (req, res)=>{
    Visitor.modifyVisitor(req.body, (rows)=>{
        res.send(rows);
    })
}

exports.visitorDelete = (req, res)=>{
    Visitor.deleteVisitor(req.body, (rows)=>{
        res.send(rows);
    })
}