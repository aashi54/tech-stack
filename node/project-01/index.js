const express = require('express')
const users = require('./MOCK_DATA.json');

const app = express()
const PORT = 8000;

// MiddleWare 
app.use(express.urlencoded({extended:false}))


// this middleware will neither end nor return/ proceed (hold)
/*
 app.use((req,res,next) => {
    console.log("Hello from middleware")

      // req.myName = "Asmita Patidar" (next middleware/route will have access of this property)
     // if we return res from her user will not go ahead
     // next() -> to call next function
// })

*/


// Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
   ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
    </ul>
    
    `;

    res.send(html)
})

// Rest APi
app.get('/api/users', (req, res) => {
  return res.json(users)
})

 app.route('/api/users/:id').get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user)
}).put((req,res) => {
    //edit user with id
   
    return res.json({status: "pending"})

}).delete((req,res) => {
       
     //delete user with id
     return res.json({status: "pending"})
})


app.post('/api/users', (req,res) => {
    // create new user
    const body = req.body;
   users.push({...body, id: users.length+1});
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
    return res.json({status: "success", id: users.length})
   })
    
})



app.listen(PORT, () => console.log("server started"))

