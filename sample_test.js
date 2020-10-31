/*
Click on `Airport Transport`, `Guest House` and `High to Low` checkboxes and click search, 
verify those boxes are still checked after clicking search.
*/

describe('My First Test', () => {

    it('Airport Transport search option should be present after retriving search results', async () => {

        cy.visit('https://www.phptravels.net/hotels/search/united-states/chicago/01-12-2020/16-12-2020/2/1');

        cy.get('.custom-control.custom-checkbox')
        .find('label')
        .first()
        .click();

        cy.get('#searchform')
        .click();

        cy.get('.custom-control.custom-checkbox')
        .find('label')
        .first()
        .should('be.checked');
    });  


    it('Guest House- search option should be present after retriving search results', () => {

        cy.visit('https://www.phptravels.net/hotels/search/united-states/chicago/01-12-2020/16-12-2020/2/1');


        cy.get(':nth-child(4) > .box-content > :nth-child(3) > .custom-control > .custom-control-label')
        .click();

        cy.get('#searchform')
        .click();

      cy.get(':nth-child(4) > .box-content > :nth-child(3) > .custom-control > .custom-control-label')
      .should('be.checked');
    });

    it('High to Low search option should be present after retriving search results', () => {
      
        cy.visit('https://www.phptravels.net/hotels/search/united-states/chicago/01-12-2020/16-12-2020/2/1');

        cy.get(':nth-child(5) > .box-content > :nth-child(1) > .custom-control > .custom-control-label')
        .click();

        cy.get('#searchform')
        .click();

        cy.get(':nth-child(5) > .box-content > :nth-child(1) > .custom-control > .custom-control-label')
        .should('be.checked');

    }); 

});
