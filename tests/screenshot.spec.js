import{test, expect} from "@playwright/test";

//tupe 1--> visible part of the screen will be taken as a screenshot
test("Screenshot 1", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.screenshot({path:"page.png"});

})

//tupe 2--> Entire part of the screen will be taken as a screenshot
test("Screenshot 2", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.screenshot({fullPage:true, path:"page1.png"});

})

//tupe 3--> Element  will be taken as a screenshot
test("Screenshot 3", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator('a[href="https://www.tricentis.com/speed/"]').screenshot({path:"page2.png"});


})