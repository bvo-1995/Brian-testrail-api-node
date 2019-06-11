var request = require("request");
var restAPI = require("../model.js");
var generalUtils = require("./generalUtils.js");
var jar = request.jar();

async function createMinBudget(name, campaignID, deliverBy, budget, rate,flightDateStart, flightDateEnd,  marketPlaceID) {
    const budgetData = { ...restAPI.minBudgetModel };
    name ? budgetData.body.name = name : null;
    campaignID ? budgetData.body.campaign_id = campaignID : null;
    deliverBy == "impressions" ? budgetData.body.target_by = deliverBy : "budget";
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

async function editBudgetGeneral(campID, name, deliverBy, amount, rate, startDate, endDate, deliverySpeed, dailyCap, monthlyCap, ioBudget, ioRate) {
    const budgetData = { ... restAPI.editBudgetModel };


    campID ? budgetData.url =  budgetData.url + campID : null;
    name ? budgetData.body.name = name : null;
    deliverBy == "impressions" ? budgetData.body.target_by = deliverBy : "budget";
    amount ? budgetData.body.target_by_goal = amount : null;
    rate ? budgetData.body.rate_io = rate : null;
    // TODO :: need to add check for startDate and endDate
    startDate ? budgetData.body.flight_date_start = startDate : null;
    endDate ? budgetData.body.flight_date_end = endDate : null;
    deliverySpeed ? budgetData.body.delivery_speed = deliverySpeed : null;
    dailyCap ? budgetData.body.daily_cap_io = dailyCap : null;
    monthlyCap ? budgetData.body.monthly_cap_io = monthlyCap : null;
    ioBudget ? budgetData.body.io_budget = ioBudget : null;
    ioRate ? budgetData.body.io_rate = ioRat : null;

    return await generalUtils.requestPromise(budgetData);
}

// A Cleaner solution and more flexible but maybe more technical
async function editBudget(editBudgetJson) {
    const budgetData = { ...restAPI.editBudgetModel};
    budgetData.body = { ...editBudgetJson};

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
    editBudgetGeneral,
    editBudget,
    deleteBudget
}