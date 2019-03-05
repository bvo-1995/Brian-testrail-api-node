var Testrail = require('testrail-api')
const fs = require('fs');

var testrail = new Testrail({
    host: 'https://nativo.testrail.net',
    email: 'bvo@nativo.com',
    password: 'lbwYZzTlJQu3m08tS8fQ-xY2wQrQwiQK69v5o6LW5'
});

const PASSED = 1;
const FAILED = 5;

let rawTestData = fs.readFileSync('testresults.json');  
var jsonResults = JSON.parse(rawTestData);
var testCaseIdRegExp = new RegExp('/\bT?C(\d+)\b/g');


for(let i = 0; i < Object.keys(jsonResults.testResults).length; i++) {

    for(let k = 0; k < Object.keys(jsonResults.testResults[i].assertionResults).length; k++) {
        console.log(Object.keys(jsonResults.testResults[i].assertionResults).length);
        let testStatus = (jsonResults.testResults[i].assertionResults[k].status == 'passed') ? PASSED : FAILED;
        let comment = (testStatus == PASSED) ? "This test Passed by Automation" : "This test failed was failed by Automation";
        let caseID = jsonResults.testResults[i].assertionResults[k].title.match(testCaseIdRegExp);
        console.log(caseID);
        // if(caseID) {
        //     testrail.addResultForCase(/*RUN_ID=*/24, /*CASE_ID=*/caseID, /*CONTENT=*/{
        //             "comment": comment,
        //             "status_id": testStatus }, function (err, response, result) {
        //         console.log(result);
        //     });
        // }
 
    }

}
