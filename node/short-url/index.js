const express = require("express")
const urlRoute = require('./routes/url')
const {connectToMongoDB} = require('./connect')
require('dotenv').config();

const app = express();
const PORT = 8001

connectToMongoDB(process.env.MONGODB_URL).then(
    () => console.log("DB connected")
)

app.listen(PORT, () => console.log("Server started"))