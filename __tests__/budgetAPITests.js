var request = require("request");
var campaignUtils = require("../helpers/restUtils/CampaignUtils.js");
var budgetUtils = require("../helpers/restUtils/BudgetUtils.js");
var generalUtils = require("../helpers/restUtils/generalUtils.js");

var jar = request.jar();


describe('API Test', () => {

    test('C996 POST Miniumum Budget', async (done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);

        //Create Campaign
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.response.statusCode).toBe(200);
        expect(createCampaignData.body.data.id).toBeDefined();

        //Create Budget
        await console.log(createCampaignData.body.data.id);
        const createBudgetData = await budgetUtils.createMinBudget("Test Budget", createCampaignData.body.data.id);
        expect(createBudgetData.response.statusCode).toBe(200);
        expect(createBudgetData.body.data.id).toBeDefined();

        //Delete Budget
        const deleteBudgetData = await budgetUtils.deleteBudget(createBudgetData.body.data.id);
        expect(deleteBudgetData.response.statusCode).toBe(200);
        expect(deleteBudgetData.body.Success).toBe(true);

        //Delete Campaign
        const deleteCampaignData = await campaignUtils.deleteCampaign(createCampaignData.body.data.id);
        expect(deleteCampaignData.response.statusCode).toBe(200);
        expect(deleteCampaignData.body.status.value.name).toBe('Deleted');
        done();
    }, 50000);

    test('PUT Edit Budget', async(done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);

        //Create Campaign
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.response.statusCode).toBe(200);
        expect(createCampaignData.body.data.id).toBeDefined();

        //Create Budget
        await console.log(createCampaignData.body.data.id);
        const createBudgetData = await budgetUtils.editBudgetGeneral("Test Budget", createCampaignData.body.data.id);
        expect(createBudgetData.response.statusCode).toBe(200);
        expect(createBudgetData.body.data.id).toBeDefined();
    }, 50000);


});

