
const shortid = require("shortid")

async function handleGenerateNewShortURL(req,res){
  const body = req.body;
  if(!body.url) return res.status(400).json({error: "Url is required"})
  const shortID = shortid()

  await URL.create({
    shortId: shortID,
    redirectURL : body.URL,
    visitedHistory: [],
  })

  return res.json({id: shortID})
}

module.exports = {handleGenerateNewShortURL}