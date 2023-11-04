const mongoose = require("mongoose")
const kettleSchema = mongoose.Schema({
    kettle_name: {
        type: String,
        required:[true,"Kettle Name is required"]
    },
    quantity: {
        type:Number,
        required:true
    },
    resistance: {
        type: String,
        required:true
    }
    })
module.exports = mongoose.model("Kettle",kettleSchema) 