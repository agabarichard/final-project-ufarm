const express = require('express');
const router = express.Router();

router.get("/dairly", (req,res)=>{
    res.render("diarly")
})

module.exports = router