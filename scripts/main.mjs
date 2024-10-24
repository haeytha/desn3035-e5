import puppeteer from 'puppeteer';
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://haeytha.github.io/desn3035-e5/');
await page.setViewport({width: 1080, height: 1024});
await page.waitForNetworkIdle();
await page.screenshot({
    path: "auto_screenshot.png"
})

await browser.close();