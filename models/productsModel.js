const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
        productimage:{
            type:String
        },


        Unitprice:{
            type:String,
            trim:true,
            // unique:true
        },

        Productname:{
            type:String,
            trim:true,
            
        },
    
            ward:{
            type:String,
            trim:true,
            default:null
        },

        ModeofPayment:{
            type:String,
            trim:true,
            unique:true,
            required:true,
        },

        modeofDelivery:{
            type:String,
            trim:true,
        
        },

        Directions:{
            type:String,
            trim:true,
        
        },
        ProduceType:{
            type:String,
            trim:true,
            default:null
        
        },
        
        


        
})

module.exports = mongoose.model("Product",productSchema)