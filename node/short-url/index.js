const express = require("express");
const path = require('path')
const cookieParser = require('cookie-parser')
const { connectToMongoDB } = require("./connect");
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth')
const URL = require("./models/url");
require("dotenv").config();

const urlRoute = require("./routes/url");
const staticRouter = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

connectToMongoDB(process.env.MONGODB_URL).then(() =>
  console.log("DB connected")
);

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// middleware to parse incoming body
app.use(express.json());

//middleware to parse form data
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


// app.get("/test", async(req,res) => {
//     const allUrls = await URL.find({})
//     return res.render('home', {
//         urls: allUrls
//     })
// })
// , restrictToLoggedinUserOnly
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute)

app.use("/",checkAuth, staticRouter)

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log("Server started"));
