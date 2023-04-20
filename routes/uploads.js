const express = require('express');
const router = express.Router();

router.get("/uploads", (req,res)=>{
    res.render("uploads")
});





module.exports = router