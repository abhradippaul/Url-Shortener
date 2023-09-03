const express = require("express")
const router = express.Router()
const {createNewShortUrl,giveShortUrl} = require("../controller/url")

router.route("/").post(createNewShortUrl)
router.get("/:shortid",giveShortUrl)

module.exports = router