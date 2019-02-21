var Testrail = require('testrail-api')
const creds = require('./credentials.js');

var testrail = new Testrail({
    host: creds.qaTestUser.host,
    user: creds.qaTestUser.email,
    password: creds.qaTestUser.password
});

// List all the case for this project
testrail.getCases(/*PROJECT_ID=*/1)
  .then(function (result) {
    console.log(result.body);
  }).catch(function (error) {
    console.log('error', error.message);
  });


// Get testcase for project
testrail.getCase(/*CASE_ID=*/82, function (err, response, body) {
  console.log(body);
});

//Get Editable CaseFields
testrail.getCaseFields(function (err, response, caseFields) {
    console.log(caseFields);
  });


//Get Results for testrun
testrail.getResultsForRun(/*RUN_ID=*/24, /*FILTERS=*/{}, function (err, response, results) {
console.log(results);
});


testrail.addResult(/*TEST_ID=*/6074, 
    /*CONTENT=*/{"comment": "This is a fake pass and a test for Test rail",
    "status_id": "1" }, 
    function (err, response, result) {
        console.log(result);
    });
