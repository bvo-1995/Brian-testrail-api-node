var Testrail = require('testrail-api')
const creds = require('../credentials/credentials.js');

const PASSED = 1;
const BLOCKED = 2;
const UNTESTED = 3; // Cannot be used when adding result
const RETEST = 4;
const FAIL = 5;

var testrail = new Testrail({
  host: creds.qaTestUser.host,
  user: creds.qaTestUser.email,
  password: creds.qaTestUser.password
});

async function addResult(testID, testStatus) {
    testrail.addResult(/*TEST_ID=*/6074, 
        /*CONTENT=*/{"comment": "This is a pass within Mocha",
        "status_id": testStatus}, 
        function (err, response, result) {
            console.log(result);
        });
}

module.exports = {
    addResult: addResult,
    PASSED : PASSED,
    BLOCKED : BLOCKED,
    UNTESTED : UNTESTED,
    RETEST : RETEST,
    FAIL : FAIL
};