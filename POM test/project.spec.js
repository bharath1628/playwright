//this is my test file
import{test, expect} from "@playwright/test";

import{login}from "./login";
import{cart}from "./addtocart";

test ("pom test framework", async({page})=>{
    //login
    const newlogin = new login(page);
    await newlogin.gotopage();
    await newlogin.loginpage("bharath1122@gmail.com","bharath12345");
    await page.waitForTimeout(4000);

    //add health book to cart
    const newcart = new cart(page);
    await newcart.cartpage();
})