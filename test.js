var Testrail = require('testrail-api')

var testrail = new Testrail({
    host: 'https://nativo.testrail.net',
    user: 'bvo@nativo.com',
    password: 'lbwYZzTlJQu3m08tS8fQ-xY2wQrQwiQK69v5o6LW5'
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