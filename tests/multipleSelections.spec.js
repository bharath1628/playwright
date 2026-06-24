import{test , expect, selectors} from "@playwright/test";

test ("select multiple options", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //sysntax:
    //await page.selectOption(selector,value);
    await page.selectOption("#colors",['Red', 'Yellow','White']);

    await page.waitForTimeout(4000);
    
})