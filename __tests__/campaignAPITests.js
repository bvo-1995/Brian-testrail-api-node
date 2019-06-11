var request = require("request");
var campaignUtils = require("../helpers/restUtils/CampaignUtils.js");
var generalUtils = require("../helpers/restUtils/generalUtils.js");

var jar = request.jar();


describe('Campaign API Test', () => {

    test('C994 POST Login', async (done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);
        done();
    }, 16000);

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
    }, 16000);

    test('Get Campaign', async(done) => {
        //Login
        const loginData = await generalUtils.login();
        expect(loginData.response.statusCode).toBe(200);
        
        //Create Campaign
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.body.data.id).toBeDefined();
        
        //Get Campaign
        const campaignInfo = await campaignUtils.getCampaign(createCampaignData.body.data.id);
        const campaignBodyJSON = JSON.parse(campaignInfo.body);
        expect(campaignBodyJSON.data.id).toBe(createCampaignData.body.data.id);
        expect(campaignInfo.response.statusCode).toBe(200);

        //Delete the Campaign
        const deleteCampaignData = await campaignUtils.deleteCampaign(campaignBodyJSON.data.id);
        expect(deleteCampaignData.response.statusCode).toBe(200);
        expect(deleteCampaignData.body.status.value.name).toBe('Deleted');
        done();
    }, 16000);

    test('PUT Campaign', async(done) => {
        //Login
        const loginData = await generalUtils.login();
        const createCampaignData = await campaignUtils.createMinCampaign();
        expect(createCampaignData.body.data.id).toBeDefined();

        //Edit Campaign with the new Name
        let campName = "Alex Edit Test Campaign";
        const campaignEditInfo = await campaignUtils.editCampaign(createCampaignData.body.data.id, campName);
        expect(campaignEditInfo.response.statusCode).toBe(200);
        expect(campaignEditInfo.body.data.name).toBe(campName);

        //Get the Campaign Data
        const campaignGetInfo = await campaignUtils.getCampaign(createCampaignData.body.data.id);
        expect(campaignGetInfo.response.statusCode).toBe(200);
        const testJson = JSON.parse(campaignGetInfo.body);
        expect(testJson.data.name).toBe(campName);

        //Delete Campaign
        const deleteCampaignData = await campaignUtils.deleteCampaign(createCampaignData.body.data.id);
        expect(deleteCampaignData.response.statusCode).toBe(200);
        expect(deleteCampaignData.body.status.value.name).toBe('Deleted');

        done();
    
    },16000)

});

