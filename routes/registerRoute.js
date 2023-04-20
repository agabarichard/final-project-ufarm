const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Register =require("../models/registerModel")
router.get("/register", (req,res)=>{
    res.render("register")
});







    

module.exports = router



