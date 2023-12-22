
const {handleGenerateNewShortURL} = require('../../controllers/url');


jest.mock('../../models/url')

const request = {
    body : {
        url : "fakeurl.com"
    }
}


test('Generate new short url', async () => {
   await handleGenerateNewShortURL(request)
})