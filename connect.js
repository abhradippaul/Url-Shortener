const mongoose = require("mongoose")

// Connecting to mongodb server atlas
mongoose.connect(process.env.DB_URL)