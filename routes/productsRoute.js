const express = require('express');
const router = express.Router();

router.get("/products", (req,res)=>{
    res.render("products")
})

const User = require("../models/productsModel")

module.exports = router