import{test , expect} from "@playwright/test";
test("DoubleClick @reg", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByRole("button", {name:"Copy Text"}).dblclick(); //doubleclick
    
    await page.waitForTimeout(4000);
})

test("Screenshot 1 @san", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.screenshot({path:"page.png"});
})

test ("drag and drop 1 @reg", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //syntax:
    //await page.dragAndDrop(source , target);
    await page.dragAndDrop("#draggable","#droppable");
    await page.waitForTimeout(4000); 
})

test ("select multiple options @smoke", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //sysntax:
    //await page.selectOption(selector,value);
    await page.selectOption("#colors",['Red', 'Yellow','White']);
    await page.waitForTimeout(4000);  
})

test("keyboard @fun ", async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    await page.getByPlaceholder("Paste one version of the text here.").fill("Hii This Is Playwright Automation");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(10000);
})