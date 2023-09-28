import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

describe('add/delete item', () => {
    var login = new LoginMethods();
    var products = new ProductMethods();

    beforeEach(function () {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('name.surname@email.com', 'password');
        login.verifySuccessfullLogin();
    })

    it('User should be able to add item into basket with POM', () => {
        products.addItemToBasket('Apple Juice');
        products.verifyItemAddedToBasket('1');
    })


    it('User schould be a able to delete item from basket with POM', () => {
        cy.wait(2000);
        products.deleteItemFromBasket();
        products.verifyItemDeletedFromBasket('0');
    })

      
})