// .env file importing
require("dotenv").config()

// Express importing
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Connecting database
require("./connect")

// Importing url routes
const urlRoute = require("./routes/url")
app.use("/shorturl",urlRoute)

// Home route
app.get("/",(req,res)=>{
    res.send("Routing working")
})

// Server listening
app.listen(process.env.PORT,()=>{
    console.log(`Server connected on port:${process.env.PORT}`)
})