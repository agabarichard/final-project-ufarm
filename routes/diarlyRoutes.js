const express = require('express');
const router = express.Router();

router.get("/diarly", (req,res)=>{
    res.render("diarly")
})

module.exports = router