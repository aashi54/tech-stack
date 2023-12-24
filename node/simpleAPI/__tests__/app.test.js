
const {registerNewUser, getAllUsers} = require('../controllers/app')


describe("POST /api/register", () => {

    test('succefully register new user', async () => {
       const req = {
        body: {
            email : "example@gmail.com",
            username : "example name"
        }
       }

       const jsonMock = jest.fn();
       const statusMock = jest.fn().mockReturnValue({ json: jsonMock });

       const res = {
        status: statusMock,
        json: jsonMock
       }

      await registerNewUser(req,res);

       expect(statusMock).toHaveBeenCalledWith(201);
       expect(jsonMock).toHaveBeenCalledWith({
        email: 'example@gmail.com',
        username: 'example name',
      });
       
    })


    test('missing username or email', async () => {

        const req = {
            body : {}
        }

        const jsonMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        

        const res = {
            status : statusMock,
            json : jsonMock
           
        }

       await registerNewUser(req, res);

        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            error: "username and email required"
        })
       
    })
})

describe('GET /api/user' , () => {
   test('return list of all users' , async () => {
 
    // const users = [];
    // jest.resetModules(); 
    // jest.resetAllMocks(); 

    const req = {};
    const res = {
        json: jest.fn()
    }

   await getAllUsers(req, res);

   expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([]));
   })
})