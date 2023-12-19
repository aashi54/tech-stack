const http = require("http")

const myServer = http.createServer((req,res) => {
    // handler function
    console.log("New req")

    res.end("hello from server")
})

myServer.listen(8000, () => {
    console.log("Server started")
})