import { ProductElements } from "./products.elements";

export class ProductMethods {
    addItemToBasket(item: string) {
        ProductElements.ElementsProduct.getBtnSearch().click();
        ProductElements.ElementsProduct.getTxtSearch().type(item);
        ProductElements.ElementsProduct.getTxtSearch().type('{enter}');
        ProductElements.ElementsProduct.getBtnAddToBasket().click();
    }
    verifyItemAddedToBasket(numAdded: string) {
        ProductElements.ElementsProduct.getLblNotification().should('have.text', numAdded);
    }

    deleteItemFromBasket() {
        ProductElements.ElementsProduct.getBtnBasket().click();
        ProductElements.ElementsProduct.getBtnDelete().click();
    }

    verifyItemDeletedFromBasket(itemsInBasket: string) {
        ProductElements.ElementsProduct.getLblNotification().should('have.text', itemsInBasket);
    }

    tryToAddItemToBasket(item: string) {
        ProductElements.ElementsProduct.getBtnSearch().click();
        ProductElements.ElementsProduct.getTxtSearch().type(item);
        ProductElements.ElementsProduct.getTxtSearch().type('{enter}');
        for (var i = 0; i < 5; i++) {
            ProductElements.ElementsProduct.getBtnAddToBasket().click();
            cy.wait(500);
        }
        ProductElements.ElementsProduct.getBtnAddToBasket().click();

    }

    verifyItemNotAddedToBasket(message: string) {
        ProductElements.ElementsProduct.getItemNotInStockNotification().should('be.visible').should('have.text', message);
    }
}