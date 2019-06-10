var request = require("request");
var campaignUtils = require("./helpers/restUtils/CampaignUtils.js");
var budgetUtils = require("./helpers/restUtils/BudgetUtils.js");
var generalUtils = require("./helpers/restUtils/generalUtils.js");
var jar = request.jar();


async function main() {
    const loginData = await generalUtils.login();
    // const createCampaignData = await campaignUtils.createMinCampaign();
    // //expect(createCampaignData.body.data.id).toBeDefined();
    
    // const campaignInfo = await campaignUtils.getCampaign(141439);
    // const testJson = JSON.parse(campaignInfo.body);
    // //await console.log(testJson.data);

    const campaignEditInfo = await campaignUtils.editCampaign(141439, "Alex Edit Test Campaign");
    await console.log(campaignEditInfo.response.statusCode);
    await console.log(campaignEditInfo.body.data);


    //campaignInfo.response.statusCode).toBe(200);
}

main();