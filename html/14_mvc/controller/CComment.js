const Comment = require("../model/MComment");

exports.main = (req, res)=>{
    res.render("index");
};

exports.comments = (req, res)=>{
    res.render("comments", {commentInfors:Comment.comments()});
};

exports.comment = (req, res)=>{
    // res.send(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id - 1;
    const comments = Comment.comments()
    res.render('comment', {commentInfor:comments[commentId]});
};