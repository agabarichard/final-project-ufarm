const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



router.get("/All",connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("All")
});



module.exports= router