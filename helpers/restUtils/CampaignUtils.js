var request = require("request");
var restAPI = require("../model.js");
var generalUtils = require("./generalUtils.js");
var jar = request.jar();

async function createMinCampaign(name, advertiserID) {
    const campaignData = { ...restAPI.minCampaignModel };
    name ? campaignData.body.name = name : null;
    advertiserID ? campaignData.body.advertiser_id = advertiserID : null;

    return await generalUtils.requestPromise(campaignData);
}

async function getCampaign(ID) {
    const campaignData = { ...restAPI.getCampaignModel };
    ID ? campaignData.url =  campaignData.url + ID : null;

    return await generalUtils.requestPromise(campaignData);
}

async function deleteCampaign(ID) {
    const campaignData = { ...restAPI.deleteCampaignModel };
    ID ? campaignData.body.id = ID : null;
    ID ? campaignData.url = campaignData.url + ID : null;

    return await generalUtils.requestPromise(campaignData);
}

module.exports = {
    createMinCampaign,
    getCampaign,
    deleteCampaign
}