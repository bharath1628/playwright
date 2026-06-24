import{test,expect} from "@playwright/test";

test("register @ demo webshop", async({page})=>{
    //navigate to url
    await page.goto("https://demowebshop.tricentis.com/");
    //click on register
    await page.locator(".ico-register").click();
    //click on gender male
    await page.locator("#gender-male").check();
    //fill the first name
    await page.locator("#FirstName").fill("bharath");
    //fill the last name
    await page.locator("#LastName").fill("bunny");
    //fill the email
    await page.locator("#Email").fill("bharath1122@gmail.com");
    //fill the password
    await page.locator("#Password").fill("bharath12345");
    //fill the confirm password field
    await page.locator("#ConfirmPassword").fill("bharath12345");
    //click on register Button
    await page.locator("#register-button").click();

    await page.waitForTimeout(5000);
    

})