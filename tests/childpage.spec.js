//syntax 1:
import{test , expect} from "@playwright/test";

//syntax 2:
//const{test, expect} = require("@playwright/test");

test("handling chindpage", async({browser})=>{

    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pagePromise = Context.waitForEvent("page"); //new tab
    await page.getByRole("button",{name:"New Tab"}).click();

    const childpage = await pagePromise;
    await childpage.locator('input[class="gsc-input"]').fill("bharath");
    await childpage.waitForTimeout(4000);

})