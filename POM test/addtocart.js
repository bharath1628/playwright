exports.cart = class cart{
    constructor(page){
        this.page = page,
        this.books ='.top-menu a[href="/books"]',
        this.healthbook = '.product-title a[href="/health"]',
        this.addtocart = "#add-to-cart-button-22"
    }

    //methods
    async cartpage(){
        await this.page.locator(this.books).click();
        await this.page.locator(this.healthbook).click();
        await this.page.locator(this.addtocart).click();
    }
}