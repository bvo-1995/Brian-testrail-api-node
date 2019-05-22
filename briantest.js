var request = require("request");
var restAPI = require("./helpers/restHelpers.js");
var jar = request.jar();


request(restAPI.login, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(response.statusCode);

    restAPI.minCampaignPayload.name = 'Brian Automation Campaign';
    request(restAPI.minCampaignPayload, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(response.body);
    });
});
