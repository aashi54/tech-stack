const express = require("express");
const {registerNewUser, getAllUsers, editUser} = require("./controllers/app")

const app = express();
const PORT = 3000;

app.use(express.json());



app.post('/api/register', registerNewUser)

app.get('/api/users',getAllUsers )

app.put('/api/users/:id', editUser)



app.listen(PORT, () => console.log(`server running on port ${PORT}`))