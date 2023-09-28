import { ProductElements } from "../products/products.elements";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    login(email: string, password: string){
      LoginElements.ElementsLogin.getTxtEmail().type(email);
      LoginElements.ElementsLogin.getTxtPassword().type(password);
      LoginElements.ElementsLogin.getBtnLogin().click();
    }
    navigateToLoginAndCloseDialog(page:string){
        cy.visit(page);
        LoginElements.ElementsLogin.getBtnCloseDialog().click();
    }
    verifySuccessfullLogin(){
        ProductElements.ElementsProduct.getBtnBasket().should('be.visible');
    }
}