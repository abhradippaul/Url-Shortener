const express = require("express")
const router = express.Router()

// Importing Controllers
const {createNewShortUrl,giveShortUrl} = require("../controller/url")

// Routes are defined
router.route("/").post(createNewShortUrl)
router.get("/:shortid",giveShortUrl)

module.exports = router