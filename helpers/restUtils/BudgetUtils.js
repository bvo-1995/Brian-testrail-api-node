var request = require("request");
var restAPI = require("../model.js");
var generalUtils = require("./generalUtils.js");
var jar = request.jar();

async function createMinBudget(name, campaignID, deliverBy, budget, rate,flightDateStart, flightDateEnd,  marketPlaceID) {
    const budgetData = { ...restAPI.minBudgetModel };
    name ? budgetData.body.name = name : null;
    campaignID ? budgetData.body.campaign_id = campaignID : null;
    //TODO: deliverBy
    budget ? budgetData.body.target_by_goal = budget : null;
    rate ? budgetData.body.rate_io = rate : null;
    flightDateStart ? budgetData.body.flight_date_start = flightDateStart : null;
    flightDateEnd ? budgetData.body.flight_date_end = flightDateEnd : null;
    marketPlaceID ? budgetData.body.marketplace_id = marketPlaceID : null;

    return await generalUtils.requestPromise(budgetData);
}

async function getBudget(ID) {
    const budgetData = { ...restAPI.getBudgetModel };
    ID ? budgetData.url =  url + ID : null;

    return await generalUtils.requestPromise(budgetData);
}

async function deleteBudget(ID) {
    const budgetData = { ...restAPI.deleteBudgetModel };
    ID ? budgetData.body.id = ID : null;
    ID ? budgetData.url =budgetData.url + ID : null;
    
    return await generalUtils.requestPromise(budgetData);
}


module.exports = {
    createMinBudget,
    getBudget,
    deleteBudget
}