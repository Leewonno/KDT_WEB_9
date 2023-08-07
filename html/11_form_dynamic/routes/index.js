const express = require("express");
const router = express.Router();
const controller = require("../controller/ct");

router.get('/', controller.main);

// router.get('/ajax', (req, res)=>{
//     console.log('back:', req.query);
//     // res.send(req.query);
//     res.send({result:true, userInfor:req.query});
// })

// router.post('/ajax', (req, res)=>{
//     console.log('back:', req.body);
//     res.send(req.body);
// })

// router.get('/axios', (req, res)=>{
//     console.log('back:', req.query);
//     res.send(req.query);
//     // res.send({result:true, userInfor:req.query});
// })

// router.post('/axios', (req, res)=>{
//     console.log('back:', req.body);
//     res.send(req.body);
// })

// router.get('/fetch', (req, res)=>{
//     console.log('back:', req.query);
//     res.send(req.query);
// })

// router.post('/fetch', (req, res)=>{
//     console.log('back:', req.body);
//     res.send(req.body);
// })

// 실습
// router.get('/regist', (req, res)=>{
//     res.render("230802_실습1");
// })


router.get('/regist_2', controller.axget);
router.post('/axios2', controller.axpost);

module.exports = router;