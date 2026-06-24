import{test , expect, selectors} from "@playwright/test";

test ("drag and drop 1", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //syntax:
    //await page.dragAndDrop(source , target);
    await page.dragAndDrop("#draggable","#droppable");
    await page.waitForTimeout(4000);
    
})

test ("drag and drop 2", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //syntax:
    //await page.dragAndDrop(source , target);

    const item = await page.locator("#draggable");
    const target = await page.locator("#droppable");

    await item.dragTo(target);
    await page.waitForTimeout(4000);
    
})

test ("drag and drop 3", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const item = await page.locator("#draggable");
    const target = await page.locator("#droppable");

    await item.hover();
    await page.mouse.down();

    await item.hover();
    await page.mouse.up();

    await page.waitForTimeout(4000);
    
})

