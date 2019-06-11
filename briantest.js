var request = require("request");
var campaignUtils = require("./helpers/restUtils/CampaignUtils.js");
var budgetUtils = require("./helpers/restUtils/BudgetUtils.js");
var generalUtils = require("./helpers/restUtils/generalUtils.js");
var jar = request.jar();


async function main() {
          //Login
          const loginData = await generalUtils.login();
  
          //Create Campaign
          const createCampaignData = await campaignUtils.createMinCampaign();
  
          //Create Budget
          const createBudgetData = await budgetUtils.createMinBudget("Test Budget", createCampaignData.body.data.id);
          await console.log(createBudgetData.response.statusCode);

}

main(); 