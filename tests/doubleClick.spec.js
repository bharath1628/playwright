import{test , expect}from "@playwright/test";

test("DoubleClick", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByRole("button", {name:"Copy Text"}).dblclick(); //doubleclick
    
    await page.waitForTimeout(4000);


})