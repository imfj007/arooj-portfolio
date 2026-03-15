const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('file://' + path.resolve('scripts/og-template.html'));
  await page.screenshot({ path: 'public/og.png', type: 'png' });
  await browser.close();
  console.log('✅ og.png generated in /public');
})();
