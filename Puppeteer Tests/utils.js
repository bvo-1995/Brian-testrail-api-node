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

async function addResult(testID, testStatus, comment) {
    if(comment == '' || comment == undefined) {
        comment = "This is a default pass within Mocha";
    }

    testrail.addResult(/*TEST_ID=*/testID, 
        /*CONTENT=*/{"comment": comment,
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