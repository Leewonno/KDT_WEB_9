// const express = require('express');
import express from "express";
// const controller = require('../controller/Cuser');
import * as controller from "../controller/Cuser.js";
// * as 하나씩 exports 시킨 것들은 이렇게 모두 불러와야한다.
const router = express.Router();

router.get('/', controller.index);
//GET localhost:8000/user/signup
router.get('/signup', controller.signup);
//POST localhost:8000/user/signup
router.post('/signup', controller.post_signup);

router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

router.post('/profile', controller.post_profile);
router.patch('/profile/edit', controller.edit_profile);
router.delete('/profile/delete', controller.delete_profile);

// module.exports = router;
export default router;
