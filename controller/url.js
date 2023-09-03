const model = require("../model/url_model")

// This function will insert new shorten url in the database
const createNewShortUrl = async (req, res) => {

    if (!req.body.url) {
        res.send("Url not found")
    }
    else {
        const urlid = await model.collection.insertOne({
            originalurl: req.body.url
        })
        res.json({
            "Shorten Url": `http://localhost:5000/shorturl/${urlid.insertedId}`
        })
    }

}

// This function will redirect the user to that url
const giveShortUrl = async(req,res) =>{
    let shorturl = await model.findOne({_id : req.params.shortid})
    res.send(`https://${shorturl.originalurl}`)
}

module.exports = {
    createNewShortUrl,
    giveShortUrl
}
