// const User = require('../model/User');
import * as User from "../model/User.js";

export const index = (req, res) => {
    res.render('index');
};
export const signup = (req, res) => {
    res.render('signup');
};
export const post_signup = async (req, res) => {
    try{    
        await User.post_signup(req.body)
        res.send({ result: true });
    }catch(err){
        console.log(err);
    }
};

export const signin = (req, res) => {
    res.render('signin');
};

export const post_signin = async (req, res) => {
    try{    
        const rows = await User.post_signin(req.body);
        if (rows.length > 0) {
            res.send({ result: true, data: result[0] });
        }
        else {
            res.send({ result: false, data: null });
        }
    } catch(err){
        console.log(err);
    }
};

export const post_profile = async (req, res) => {
    try{
        const rows = await User.post_profile(req.body);
        res.render('profile', { data: rows[0] });
    }catch(err){
        console.log(err);
    }

};

export const edit_profile = async (req, res) => {
    try{
        await User.edit_profile(req.body);
        res.send({ result: true });
    }catch(err){
        console.log(err);
    }
};

export const delete_profile = async (req, res) => {
    try{
        await User.delete_profile(req.body.id);
        res.send({ result: true });
    }
    catch(err){
        console.log(err);
    }
};
