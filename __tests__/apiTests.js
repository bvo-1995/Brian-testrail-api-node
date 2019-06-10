var request = require("request");
var campaignUtils = require("../helpers/restUtils/CampaignUtils.js");
var budgetUtils = require("../helpers/restUtils/BudgetUtils.js");
var generalUtils = require("../helpers/restUtils/generalUtils.js");

var jar = request.jar();


describe('API Test', () => {
    test('C994 POST Login', async (done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);
        done();
    }, 50000);

    test('C995 POST Miniumum Campaign', async (done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);

        //Create Campaign
        let campName = "Brian Test Jest Campaign 5/23";
        const createCampaignData = await campaignUtils.createMinCampaign(campName);
        expect(createCampaignData.response.statusCode).toBe(200);
        expect(createCampaignData.body.data.id).toBeDefined();
        expect(createCampaignData.body.data.name).toBe(campName);

        //Delete Campaign
        const deleteCampaignData = await campaignUtils.deleteCampaign(createCampaignData.body.data.id);
        expect(deleteCampaignData.response.statusCode).toBe(200);
        expect(deleteCampaignData.body.status.value.name).toBe('Deleted');
        done();
    }, 50000);

    test('C996 POST Miniumum Budget', async (done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);

        //Create Campaign
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.response.statusCode).toBe(200);
        expect(createCampaignData.body.data.id).toBeDefined();

        //Create Budget
        const createBudgetData = await budgetUtils.createMinBudget(null, createCampaignData.body.data.id);
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

    test.only('Get Campaign', async(done) => {
        const loginData = await generalUtils.login();
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.body.data.id).toBeDefined();
        
        const campaignInfo = await campaignUtils.getCampaign(createCampaignData.body.data.id);
        const campaignBodyJSON = JSON.parse(campaignInfo.body);
        expect(campaignBodyJSON.data.id).toBe(createCampaignData.body.data.id);
        expect(campaignInfo.response.statusCode).toBe(200);

        const deleteCampaignData = await campaignUtils.deleteCampaign(campaignBodyJSON.data.id);
        expect(deleteCampaignData.response.statusCode).toBe(200);
        expect(deleteCampaignData.body.status.value.name).toBe('Deleted');
        done();
    }, 16000);

    test('PUT Campaign', async(done) => {
        const loginData = await generalUtils.login();
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.body.data.id).toBeDefined();

    
    },16000)

});

