const { expect } = require('chai');
var sum = require('../Puppeteer Tests/sum');
var example = require('../Puppeteer Tests/exampleDemo');
var logintest = require('../Puppeteer Tests/logintest');

describe('sample test', function () {
    let page;
    var testStatus;
  
    before (async function () {
    });

    beforeEach (async function () {
      page = await browser.newPage();
    });
    
    afterEach(async function () {
      this.currentTest.state;
    });
  
    after (async function () {
    })
      
    it('Example Login', async function () {
      this.timeout(0);
      await logintest(page);
    });

    it('Example demo after', async function () {
      this.timeout(0);
      await example(page);
    });

    it('Example demo', async function () {
      this.timeout(0);
      await example(page);
    });

  });