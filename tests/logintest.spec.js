import {test,expect} from "@playwright/test";

test("positive login test", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("#username").fill("student");

    await page.locator("#password").fill("Password123");

    await page.locator("#submit").click();

    //To Verify new page contains expected text
    let positive = await page.locator('p[class="has-text-align-center wp-block-paragraph"]');
    expect(positive).toHaveText("Congratulations student. You successfully logged in!");

    //To Verify Log out button is displayed
    let logout = await page.locator('a[href="https://practicetestautomation.com/practice-test-login/"]');
    expect(logout).toHaveText("Log out");

    await page.waitForTimeout(5000); 
}) ;

test("negative username test", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("#username").fill("incorrectUser");

    await page.locator("#password").fill("Password123");

    await page.locator("#submit").click();

    //To Verify error message of Username
    let userErr = await page.locator("#error");
    expect(userErr).toHaveText("Your username is invalid!");

    await page.waitForTimeout(4000); 
}) ;


test("negative password test", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("#username").fill("student");

    await page.locator("#password").fill("incorrectPassword");

    await page.locator("#submit").click();
    //To Verify error message of Password
    let passwordErr = await page.locator("#error");
    expect(passwordErr).toHaveText("Your password is invalid!");

    await page.waitForTimeout(4000);
}) ;
