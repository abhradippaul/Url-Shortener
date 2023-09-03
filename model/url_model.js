const mongoose = require("mongoose")

// Defining Schema of the database
const urlSchema = new mongoose.Schema({
    originalurl: {
        type: String,
        required: true
    }
}, { timestamps: true })

// Exporting model of the schema
module.exports = mongoose.model("urlinfo",urlSchema)