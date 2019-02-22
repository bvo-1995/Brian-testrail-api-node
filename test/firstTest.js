const { expect } = require('chai');
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


describe('sample test', function () {
    let page;
  
    before (async function () {
      page = await browser.newPage();
      await page.goto('http://google.com');
    });
  
    after (async function () {
      await page.close();
    })
  
    it('should have the correct page title', async function () {
      expect(await page.title()).to.eql('Google');
      
      testrail.addResult(/*TEST_ID=*/6074, 
        /*CONTENT=*/{"comment": "This is a pass within Mocha",
        "status_id": "1" }, 
        function (err, response, result) {
            console.log(result);
        });
    
    });

  });