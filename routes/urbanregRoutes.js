const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Register =require("../models/registerModel")
router.get("/urbanreg", (req,res)=>{
    res.render("urbanreg")
});







    

module.exports = router



