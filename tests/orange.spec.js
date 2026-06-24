import{test, expect} from "@playwright/test";

test("orangehrm", async({browser})=>{
    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const pagePromise = Context.waitForEvent('page');
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
    await page.screenshot({path:"orange.png"});
    await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue("Admin");
    await page.getByRole("link",{name:"OrangeHRM, Inc"}).click();
    const childpage = await pagePromise;
    await childpage.getByPlaceholder("Your email address").fill("bharath11@gmail.com");
    await childpage.screenshot({fullPage:true, path:"orgfull.png"});

    await page.waitForTimeout(2000);
})