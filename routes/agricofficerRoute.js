const express = require ("express");
const router = express.Router();



router.get("/agricofficer",(req,res)=>{
    res.render("agricofficer")
});

module.exports = router