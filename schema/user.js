
const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_join : {
      type : Date,
      default : Date.now()
    },
    user_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg:{
        type: String,
        default: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
})

const User = mongoose.model("user" , userSchema)
module.exports = User