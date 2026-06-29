const { time } = require("node:console");

exports.login = class login{
    constructor(page){
        this.page = page,
        this.loginlink = ".ico-login",
        this.mail = "#Email",
        this.pwd = "#Password",
        this.loginbutton = ".login-button"
    }

    //methods
    async gotopage(){
        await this.page.goto("https://demowebshop.tricentis.com/")
    }

    //login page
    async loginpage(email, password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.mail).fill(email);
        await this.page.locator(this.pwd).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
}