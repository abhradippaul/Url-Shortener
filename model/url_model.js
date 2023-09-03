const mongoose = require("mongoose")
const urlSchema = new mongoose.Schema({
    originalurl: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("urlinfo",urlSchema)