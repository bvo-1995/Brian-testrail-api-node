const { expect } = require('chai');
var Testrail = require('testrail-api')
const creds = require('../credentials/credentials.js');
var sum = require('../Puppeteer Tests/sum');
var example = require('../Puppeteer Tests/exampleDemo');


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
    var testStatus;
  
    before (async function () {
    });

    beforeEach (async function () {
      page = await browser.newPage();
    });
  
    after (async function () {
    })
  
    // it('should have the correct page title', async function () {
    //     await page.goto('http://google.com');
    //     expect(await page.title()).to.eql('Google');
      
    // //   testrail.addResult(/*TEST_ID=*/6074, 
    // //     /*CONTENT=*/{"comment": "This is a pass within Mocha",
    // //     "status_id": "1" }, 
    // //     function (err, response, result) {
    // //         console.log(result);
    // //     });
    
    // });

      
    it('Example demo', async function () {
      this.timeout(0);
      await example(page);

        // await testrail.addResult(/*TEST_ID=*/6074, 
        //     /*CONTENT=*/{"comment": "This is a pass within Mocha + Puppeteer",
        //     "status_id": (testStatus) ? PASSED : FAIL}, 
        //     function (err, response, result) {
        //         console.log(result);
        // });

    });

    it('Example demo 2', async function () {
      this.timeout(0);
      await example(page);

        // await testrail.addResult(/*TEST_ID=*/6074, 
        //     /*CONTENT=*/{"comment": "This is a pass within Mocha + Puppeteer",
        //     "status_id": (testStatus) ? PASSED : FAIL}, 
        //     function (err, response, result) {
        //         console.log(result);
        // });

    });

    // it('simple sum', async function () {
    //     expect(sum(5)).to.equal(5)
    // });


  });