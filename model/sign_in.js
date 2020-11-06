const mongoose = require("mongoose")


const users = mongoose.Schema({
    username : {
        type : String,
        require: true,
        unique:false
    },
    password :{
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("sign_in",users )