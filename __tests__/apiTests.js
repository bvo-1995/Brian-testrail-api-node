var request = require("request");
var restAPI = require("../helpers/restHelpers.js");
var jar = request.jar();



describe('API Test', () => {
    test('C994 POST Login', async() => { 
        request(restAPI.login, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).toBe(200);
        });
    }, 16000);
    
    test('C995 POST Miniumum Campaign', async() => {
        let campaignPOST = restAPI.minCampaignPOST;
        campaignPOST.body.name = 'Brian Jest Automation Campaign';

        request(restAPI.login, function (error, response, body) {
            expect(response.statusCode).toBe(200);

            request(campaignPOST, function (error, response, body) { 
                expect(response.statusCode).toBe(200);
                expect(body.data.id).toBeDefined();

                let id = body.data.id;
                let deleteCamp = restAPI.deleteCampaign;
                deleteCamp.body.id = id;
                deleteCamp.url = deleteCamp.url + id;

                //Delete Campaign
                request(deleteCamp, function (error, response, body) {
                    expect(response.statusCode).toBe(200);
                    expect(body.status.value.name).toBe('Deleted');
                });

            });
        });

    }, 16000);
        
    test('C996 POST Miniumum Budget', async() => {
        var budgetPost = restAPI.minBudgetPOST;
        budgetPost.body.name = 'Brian Jest Test Budget';

        request(restAPI.login, function (error, response, body) {
            if (error) throw new Error(error);

            expect(response.statusCode).toBe(200);

            request(budgetPost, function (error, response, body) {
                if (error) throw new Error(error);
                expect(response.statusCode).toBe(200);
            });
        });
    }, 16000);

    test('C997 DELETE Campaign', async() => {
        let campaignPOST = restAPI.minCampaignPOST;
        campaignPOST.body.name = 'Brian Jest Automation Campaign';

        //Login To Nativo
        request(restAPI.login, function (error, response, body) {
            expect(response.statusCode).toBe(200);

            //Create Campaign to Delete
            request(campaignPOST, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(body.data.id).toBeDefined();
                let id = body.data.id;

                let deleteCamp = restAPI.deleteCampaign;
                deleteCamp.body.id = id;
                deleteCamp.url = deleteCamp.url + id;

                //Delete Campaign
                request(deleteCamp, function (error, response, body) {
                    expect(response.statusCode).toBe(200);
                    expect(body.status.value.name).toBe('Deleted');
                });
            });
        });

    }, 16000);

    test('C998 POST Miniumum Budget', async() => {
        let budgetPost = restAPI.minBudgetPOST;

        request(restAPI.login, function (error, response, body) {
            expect(response.statusCode).toBe(200);

            request(budgetPost, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(body.data.id).toBeDefined();

                let id = body.data.id;

                let deleteBudg = restAPI.deleteBudget;
                deleteBudg.body.id = id;
                deleteBudg.url = deleteBudg.url + id;

                //Delete Campaign
                request(deleteBudg, function (error, response, body) {
                    expect(response.statusCode).toBe(200);
                    expect(body.Success).toBe('true');
                });

            });
        });
    }, 16000);


});

