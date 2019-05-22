var request = require("request");
var restAPI = require("./helpers/restHelpers.js");
var jar = request.jar();

var campaignPayload = restAPI.minCampaignPayload;
campaignPayload.body.name = 'Brian Automation Campaign';

console.log(campaignPayload);
request(restAPI.login, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(response.statusCode);

    request(campaignPayload, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(response.body);
    });
});
