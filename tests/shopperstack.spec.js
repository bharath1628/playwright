import{test , expect} from "@playwright/test";

test("shopperstack", async({page})=>{

    await page.goto("https://www.shoppersstack.com/");

    
    await page.locator("#loginBtn").click();

    await page.locator("#Email").fill("bharathb76@gmail.com");

    await page.locator("#Password").fill("Bharath@28"); 

    await page.locator("#Login").click();

    await page.locator('a[id="men"]').click();

    await page.locator('img[src="https://m.media-amazon.com/images/I/510IArwM+UL._UY695_.jpg"]').click();

    await page.locator(".ProductDisplay_buyNow__4fwjt").click(); 

    await page.waitForTimeout(5000);  


})