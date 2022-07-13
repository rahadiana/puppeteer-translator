const GetContent = function(content, Sourcelang, TargetLang) {
  return new Promise(async (resolve, reject) => {
      try {
          async function autoScroll(page) {
              await page.evaluate(async () => {
                  await new Promise((resolve, reject) => {
                      var totalHeight = 0;
                      var distance = 100;
                      var timer = setInterval(() => {
                          var scrollHeight = document.body.scrollHeight;
                          window.scrollBy(0, distance);
                          totalHeight += distance;
                          if (totalHeight >= scrollHeight) {
                              clearInterval(timer);
                              resolve();
                          }
                      }, 100);
                  });
              });
          }

          const puppeteer = require('puppeteer');
          const {
              GetQuery
          } = require('./FindQuery');
          const browser = await puppeteer.launch({
              headless: 0
          });
          const page = await browser.newPage();
          await page.setExtraHTTPHeaders({
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
          })
          await page.setViewport({
              width: 1200,
              height: 800
          });
          await page.goto(`https://rahadiana-github-io.translate.goog/translator/ts.html?_x_tr_sl=${Sourcelang}&_x_tr_tl=${TargetLang}&_x_tr_hl=id&_x_tr_pto=nui&q=${content}`, {
              waitUntil: 'networkidle0',
          });
          await page.waitForTimeout(300)
          await autoScroll(page);
          const data = await page.evaluate(() => document.querySelector('*').outerHTML);
          let resQuery = GetQuery(data);
          var result = resQuery.replace(/<\/font>/g, '').replace(/<font style="vertical-align: inherit;">/g, '');
          await browser.close();
          return resolve(result);
      } catch (e) {
          return reject(e);
      }
  })
}

module.exports = {
  GetContent
}