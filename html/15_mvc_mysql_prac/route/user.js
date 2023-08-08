const express = require("express");
const route = express.Router();
const controller = require("../controller/Cuser");

route.get('/', controller.main);

route.get('/user', controller.user);

route.get('/user/signin', controller.signin)

route.post('/user/signin', controller.postSignin);

route.get('/user/signup', controller.signup);

route.post('/user/signup', controller.postSignup);

route.post('/user/profile', controller.postProfile);

route.post('/user/profile/edit', controller.postProfileEdit);

route.post('/user/profile/delete', controller.postProfileDelete);

module.exports = route;