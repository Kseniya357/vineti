/*
Click on My Account button and click Login. Login with incorrect credentials and 
verify the error message. Login with correct credentials and verify the user name.

Credentials: username: user@phptravels.com/ password: demouser
*/

describe('Testing search options', () => {

    it('Login with invalid credentials', async () => {

        cy.visit('https://www.phptravels.net');
        cy.get(':nth-child(3) > .dropdown > #dropdownCurrency')
        .click();

        cy.get('.dropdown-menu > div > .active')
        .click();

        cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
        .type('test@gmail.com');

        cy.get(':nth-child(2) > .pure-material-textfield-outlined > span')
        .type('123p234');

        cy.get('#loginfrm > .btn-primary')
        .click();

        cy.get('.alert')
        .should('contain', 'Invalid Email or Password')

    });

    it('Login with valid credentials', async () => {

        cy.visit('https://www.phptravels.net');
        cy.get(':nth-child(3) > .dropdown > #dropdownCurrency')
        .click();

        cy.get('.dropdown-menu > div > .active')
        .click();

        cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
        .type('user@phptravels.com');

        cy.get(':nth-child(2) > .pure-material-textfield-outlined > span')
        .type('demouser');

        cy.get('#loginfrm > .btn-primary')
        .click();

        cy.get('.text-align-left')
        .should('contain', 'Hi, Demo User')

    });

})