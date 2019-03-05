const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');


class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.browser = await puppeteer.launch({
        headless: false,
    });
    this.global.page = await this.global.browser.newPage();

  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment
