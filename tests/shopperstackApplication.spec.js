import{test, expect} from "@playwright/test";

test("Admin singUp",async({page})=>{

    await page.goto("https://www.shoppersstack.com/");
    await page.getByRole("link",{name:"Create Admin Account"}).click();
    await page.getByLabel("First Name").fill("bharath");
    await page.getByLabel("Last Name").fill("bunny");
    await page.locator("#Male").click();
    await page.getByLabel("Phone Number").fill("9876543245");
    await page.getByLabel("Email Address").fill("bunny05@gmail.com");
    await page.locator("#Password").fill("Bunny@05");
    await page.locator('input[aria-invalid="false"]').nth(5).fill("Bunny@05");
    await page.locator('select[id="Country"]').selectOption("India");
    await page.locator("#State").selectOption("Andhra Pradesh");
    await page.locator("#City").selectOption("Chittoor");
    await page.waitForTimeout(3000);
    await page.getByRole("button",{name:"Register"}).click();

    await page.waitForTimeout(4000);  


})