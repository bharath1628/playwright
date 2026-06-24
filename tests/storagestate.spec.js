import{test , expect} from "@playwright/test";

test("shopperstack", async({page})=>{

    await page.goto("https://www.shoppersstack.com/");

    
    await page.locator("#loginBtn").click();

    await page.locator("#Email").fill("bharathb76@gmail.com");

    await page.locator("#Password").fill("Bharath@28"); 

    await page.locator("#Login").click();

    await page.context().storageState({path:"auth.json"});
})