const express = require('express');
const router = express.Router();

router.get("/products", (req,res)=>{
    res.render("products")
})

if(req.user.type== "submit" && userExist){
    res.redirect("/uploads")
}
module.exports = router