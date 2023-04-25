const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



router.get("/ufuploadform",connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("ufuploadform")
});



module.exports= router