require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
require("./connect")
const urlRoute = require("./routes/url")

app.use("/shorturl",urlRoute)

app.get("/",(req,res)=>{
    res.send("Routing working")
})


app.listen(process.env.PORT,()=>{
    console.log(`Server connected on port:${process.env.PORT}`)
})