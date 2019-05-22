var request = require("request");
var restAPI = require("../helpers/restHelpers.js");
var jar = request.jar();



describe('API Test', () => {


    test('Getting Status From QA Login Page', async() => { 
        request('https://qa-admin.nativo.com/login', function (error, response, body) {
            expect(response.statusCode).toBe(200);
        });
    }, 16000);

    test('Getting Campaign from ID', async() => { 
        request.get('https://qa-admin.nativo.com/api/campaigns/v3/140876', function (error, response, body) {
            expect(response.statusCode).toBe(200);
        });
    }, 16000);
    
    test('POST Miniumum Campaign', async() => {
        var campaignPayload = restAPI.minCampaignPayload;
        campaignPayload.body.name = 'Brian Jest Automation Campaign';

        request(restAPI.login, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).toBe(200);
            expect(campaignPayload.body.name).toBe('Brian Jest Automation Campaign');
            request(campaignPayload, function (error, response, body) {
                if (error) throw new Error(error);
                expect(response.statusCode).toBe(200);
            });
        });

    }, 16000);

});

