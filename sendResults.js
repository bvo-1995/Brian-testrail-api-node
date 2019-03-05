var Testrail = require('testrail-api')
const fs = require('fs');

var testrail = new Testrail({
    host: 'https://nativo.testrail.net',
    user: 'bvo@nativo.com',
    password: 'lbwYZzTlJQu3m08tS8fQ-xY2wQrQwiQK69v5o6LW5'
});

const PASSED = 1;
const FAILED = 5;

var runListJson;
let runID;

//Grab List of Runs 
testrail.getRuns(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, response, runs) {
    // Get Most Current Run
    runID = runs[0].id;
    
    //Parse Json Results from a file
    let rawTestData = fs.readFileSync('testresults.json');  
    var jsonResults = JSON.parse(rawTestData);
    var testCaseIdRegExp = /\bT?C(\d+)\b/g;

    //Parse through Json Results to the Individual Tests
    for(let i = 0; i < Object.keys(jsonResults.testResults).length; i++) {

        for(let k = 0; k < Object.keys(jsonResults.testResults[i].assertionResults).length; k++) {
            //Set Up Data for TestRails API Call
            let testStatus = (jsonResults.testResults[i].assertionResults[k].status == 'passed') ? PASSED : FAILED;
            let comment = (testStatus == PASSED) ? "This test Passed by Automation" : "This test failed was failed by Automation";
            let caseID = jsonResults.testResults[i].assertionResults[k].title.match(testCaseIdRegExp);
            
            //Check if CaseID is valid
            if(caseID) {
                caseID = caseID[0].substring(1);
                //Send Result to TestRail
                testrail.addResultForCase(/*RUN_ID=*/runID, /*CASE_ID=*/caseID, /*CONTENT=*/{
                        "comment": comment,
                        "status_id": testStatus }, function (err, response, result) {
                    console.log(result);
                });
            }
     
        }
    
    }
    
  });
