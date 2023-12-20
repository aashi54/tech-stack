const express = require("express")
const urlRoute = require('./routes/url')
const {connectToMongoDB} = require('./connect')

const app = express();
const PORT = 8001

connectToMongoDB("mongodb+srv://Aashi2023:Aashi2023@cluster.uvflvcz.mongodb.net/?retryWrites=true&w=majority").then(
    () => console.log("DB connected")
)

app.listen(PORT, () => console.log("Server started"))