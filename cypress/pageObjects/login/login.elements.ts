
export class LoginElements {
    static get ElementsLogin() {
        return {
            getBtnCloseDialog: () =>cy.get('.close-dialog'),
            getTxtEmail: () => cy.get('#email'),
            getTxtPassword: () => cy.get('#password'),
            getBtnLogin: () => cy.get('#loginButton')
        }
    }
}