var request = require("request");
var campaignUtils = require("../helpers/restUtils/CampaignUtils.js");
var budgetUtils = require("../helpers/restUtils/BudgetUtils.js");
var generalUtils = require("../helpers/restUtils/generalUtils.js");

var jar = request.jar();


describe('API Test', () => {
    test('C994 POST Login', async (done) => {
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);
        done();

    }, 50000);

    test('C995 POST Miniumum Campaign', async (done) => {
        
            const loginData = await generalUtils.login();
            expect(loginData.response.statusCode).toBe(200);

            let campName = "Brian Test Jest Campaign 5/23";
            const createCampaignData = await campaignUtils.createMinCampaign(campName);
            expect(createCampaignData.response.statusCode).toBe(200);
            expect(createCampaignData.body.data.id).toBeDefined();
            expect(createCampaignData.body.data.name).toBe(campName);

            const deleteCampaignData = await campaignUtils.deleteCampaign(createCampaignData.body.data.id);
            expect(deleteCampaignData.response.statusCode).toBe(200);
            expect(deleteCampaignData.body.status.value.name).toBe('Deleted');
            done();

    }, 50000);

    // test('C996 POST Miniumum Budget', async (done) => {
    //     try {
    //         const loginData = await generalUtils.login();
    //         expect(loginData.response.statusCode).toBe(200);

    //         let budgetName = "Brian Test Jest Budget 5/23";
    //         const createBudgetData = await budgetUtils.createMinBudget(budgetName);
    //         expect(createBudgetData.response.statusCode).toBe(200);
    //         expect(createBudgetData.body.data.id).toBeDefined();
    //         expect(createBudgetData.body.data.name).toBe(budgetName);

    //         const deleteBudgetData = await budgetUtils.deleteBudget(createBudgetData.body.data.id);
    //         expect(deleteBudgetData.response.statusCode).toBe(200);
    //         expect(deleteBudgetData.body.status.value.name).toBe('Deleted');
    //         done();
    //     }
    //     catch (error) {

    //     }

    // }, 50000);

    // test('C997 DELETE Campaign', async () => {
    //     try {
    //         const loginData = await generalUtils.login();
    //         expect(loginData.response.statusCode).toBe(200);

    //         const createCampaignData = await campaignUtils.createMinCampaign();
    //         expect(createCampaignData.response.statusCode).toBe(200);
    //         expect(createCampaignData.body.data.id).toBeDefined();

    //         const deleteCampaignData = await campaignUtils.deleteCampaign(createCampaignData.body.data.id);
    //         expect(deleteCampaignData.response.statusCode).toBe(200);
    //         expect(deleteCampaignData.body.status.value.name).toBe('Deleted');
    //         done();
    //     }
    //     catch (error) {

    //     }

    // }, 50000);

    // test('C998 POST Miniumum Budget', async (done) => {
    //     try {
    //         const loginData = await generalUtils.login();
    //         expect(loginData.response.statusCode).toBe(200);

    //         const createBudgetData = await budgetUtils.createMinBudget();
    //         expect(createBudgetData.response.statusCode).toBe(200);
    //         expect(createBudgetData.body.data.id).toBeDefined();

    //         const deleteBudgetData = await budgetUtils.deleteBudget(createBudgetData.body.data.id);
    //         expect(deleteBudgetData.response.statusCode).toBe(200);
    //         expect(deleteBudgetData.body.status.value.name).toBe('Deleted');
    //         done();
    //     }
    //     catch (error) {

    //     }
    // }, 50000);

});

