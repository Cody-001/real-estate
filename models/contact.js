const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["active", "deleted"],
        default: "active"
    },
    completed:{
        type: Boolean,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Contact", contactSchema)