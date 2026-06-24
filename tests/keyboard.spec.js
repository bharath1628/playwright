import{test,expect} from "@playwright/test";

test("keyboard ", async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    await page.getByPlaceholder("Paste one version of the text here.").fill("Hii This Is Playwright Automation");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(10000);


})

