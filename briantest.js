var request = require("request");
var restAPI = require("./helpers/restHelpers.js");
var jar = request.jar();

        let budgetPost = restAPI.minBudgetPOST;

        request(restAPI.login, function (error, response, body) {

            request(budgetPost, function (error, response, body) {

                let id = 1;

                let deleteBudg = restAPI.deleteBudget;
                deleteBudg.body.id = id;
                deleteBudg.url = deleteBudg.url + id;

                //Delete Campaign
                request(deleteBudg, function (error, response, body) {
                    //expect(body.status.value.name).toBe('Deleted');
                    console.log(response.statusCode);
                });

            });
        });