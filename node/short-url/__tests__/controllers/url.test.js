
// const {handleGenerateNewShortURL} = require('../../controllers/url');


// jest.mock('../../models/url')

// const request = {
//     body : {
//         url : "fakeurl.com"
//     }
// }


// test('Generate new short url', async () => {
//    await handleGenerateNewShortURL(request)
// })


const { handleGenerateNewShortURL } = require('../../controllers/url');
const URL = require('../../models/url');
const shortid = require('shortid');

jest.mock('shortid');
jest.mock('../../models/url');

describe('handleGenerateNewShortURL', () => {
  test('should generate a new short URL and render home page', async () => {
    const req = {
      body: {
        url: 'fakeurl.com',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      render: jest.fn(),
    };

    // Mock shortid
    const mockShortID = 'mockedShortID';
    shortid.mockReturnValue(mockShortID);

    await handleGenerateNewShortURL(req, res);

    // Assertions
    // expect(res.status).not.toHaveBeenCalled();
    // expect(res.json).not.toHaveBeenCalled();

    // Ensure URL.create is called with the expected parameters
    expect(URL.create).toHaveBeenCalledWith({
      shortId: mockShortID,
      redirectURL: req.body.url,
      visitedHistory: [],
    });

    // Ensure res.render is called with the expected parameters
    expect(res.render).toHaveBeenCalledWith('home', { id: mockShortID });
  });


});
