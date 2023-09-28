import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

describe('item not in stock', () => {
    var login = new LoginMethods();
    var products = new ProductMethods();

    beforeEach(function () {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('name.surname@email.com', 'password');
        login.verifySuccessfullLogin();
    })


    afterEach(function () {
        cy.wait(1000)
        products.deleteItemFromBasket();
    })

    it('User should not be able to add item into basket', () => {
        cy.get('.mat-search_icon-search').click();
        cy.get('#mat-input-0').type('Apple Juice').type('{enter}');
        for (var i = 0; i < 5; i++) {
            cy.get('[aria-label="Add to Basket"]').click();
            cy.wait(500);
        }
        cy.get('[aria-label="Add to Basket"]').click();
        cy.get('.mat-simple-snack-bar-content').should('be.visible').should('have.text','You can order only up to 5 items of this product.')
    })

   
    
    it('User should not be able to add item into basket with POM', () => {
        cy.wait(2000)
        products.tryToAddItemToBasket("Apple Juice")
        products.verifyItemNotAddedToBasket('You can order only up to 5 items of this product.');
    })
    

})