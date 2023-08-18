const express = require("express");
const route = express.Router();
const controller = require("../controller/CT");

route.get('/', controller.main);

route.get('/login', controller.login);
route.post('/login', controller.postLogin);
route.get('/signup', controller.signup);
route.post('/signup', controller.postSignup);
route.get('/profile', controller.profile);
route.post('/profile', controller.postProfile);
route.post('/profile/modify', controller.modifyUser);
route.post('/profile/modify/new', controller.modifyUserNew);

module.exports = route;