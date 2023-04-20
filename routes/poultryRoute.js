const express = require('express');
const router = express.Router();

router.get("/poultry", (req,res)=>{
    res.render("poultry")
})

module.exports = router