export class ProductElements{
    static get ElementsProduct(){
        return {
            getBtnBasket: () =>  cy.get('[aria-label="Show the shopping cart"]'),
            getBtnSearch: () => cy.get('.mat-search_icon-search'),
            getTxtSearch: () => cy.get('#mat-input-0'),
            getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
            getLblNotification: () => cy.get('.fa-3x.warn-notification'),
            getBtnDelete: () => cy.get('.cdk-column-remove > .mat-focus-indicator'),
            getItemNotInStockNotification: () => cy.get('.mat-simple-snack-bar-content')
        }
    }
}