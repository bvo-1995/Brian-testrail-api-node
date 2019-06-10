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

async function editCampaign(ID, name, advertiserLogo, notes, salesForceID) {
    const campaignData = { ...restAPI.editCampaignModel };
    ID ? campaignData.body.id = ID : null;
    ID ? campaignData.url = campaignData.url + ID : null;
    name ? campaignData.body.name = name : null;
    advertiserLogo ? campaignData.body.advertiser_logo_url = advertiserLogo : null;
    notes ? campaignData.body.notes = notes : null;
    salesForceID ? campaignData.body.salesForceID = salesForceID : null;
    return await generalUtils.requestPromise(campaignData); 
}

async function prepTrackingTagsData(trackBy, tags, type) {
    const trackingTagData = null;
    
    return await trackingTagData;
}

module.exports = {
    createMinCampaign,
    getCampaign,
    editCampaign,
    deleteCampaign
}