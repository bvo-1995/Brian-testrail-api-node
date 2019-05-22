const request = require('request');

describe('API Test', () => {


    test('Getting Status From QA Login Page', async() => { 
        request('https://qa-admin.nativo.com/login', function (error, response, body) {
            expect(response.statusCode).toBe(200);
        });
    }, 16000);

    test('Getting Campaign from ID', async() => { 
        request.get('https://qa-admin.nativo.com/api/campaigns/v3/140876', function (error, response, body) {
            expect(response.body).toBe(200);
        });
    }, 16000);

});

