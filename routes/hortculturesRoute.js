const express = require('express');
const router = express.Router();

router.get("/hortcultures", (req,res)=>{
    res.render("hortcultures")
})

module.exports = router