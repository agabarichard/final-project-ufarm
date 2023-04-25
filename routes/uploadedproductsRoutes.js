const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



router.get("/uploadedproducts",connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("uploadedproducts")
});



module.exports= router