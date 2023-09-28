import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new ProductMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
    login.login('sanja.gorgievska@gmail', '#Newuser12#');
    login.verifySuccessfullLogin();
  })

  it('User should be able to add item into basket', () => {
    cy.get('.mat-search_icon-search').click();
    cy.get('#mat-input-0').type('apple juice');
    cy.get('#mat-input-0').type('{enter}');
    cy.get('[aria-label="Add to Basket"]').click();
    cy.get('.fa-3x.warn-notification').should('have.text', '1');
  })

  it('User should be able to add item into basket with POM', () => {
    products.addItemToBasket('apple juice');
    products.verifyItemAddedToBasket('1');
  })
})