
const {handleGenerateNewShortURL} = require('../../controllers/url');

const request = {
    body : {
        url : "fakeurl.com"
    }
}


test('Generate new short url', () => {
    handleGenerateNewShortURL(request)
})