const mongoose = require("mongoose")
const kettleSchema = mongoose.Schema({
    kettle_name: {
        type: String,
        required:[true,"Kettle Name is required"]
    },
    quantity: {
        type:Number,
        required:true,
        min:[1,"quantity is greater than one"],
        max:[100,"quantity must be less than 100 "],
        validate:{
            validator:function(value){
                return "Quantity must be between 1 to 100 and no negatives values "
            },
            message: error1 => `${error1.value} is not within the limit`
        }
    
    },
    resistance: {
        type: String,
        required:true
    }
    })
module.exports = mongoose.model("Kettle",kettleSchema) 