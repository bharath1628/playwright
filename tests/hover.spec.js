import{test , expect, selectors} from "@playwright/test";

test ("select multiple options", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator(".dropbtn").hover();

    let message = await page.getByRole("link",{name:"Mobiles"})
    expect(message).toHaveText("Mobiles");
    await page.waitForTimeout(4000);
    
})