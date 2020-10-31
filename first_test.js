/*
Search for hotel in Chicago (Nov 1st - Nov 5th ) 3 Adults and 1 Child and click Search.
 Verify `No Results Found` text is displayed. 

*/

describe('Testing search options', () => {

    it('Search for hotel in Chicago', async () => {

        cy.visit('https://www.phptravels.net');
        cy.get('.select2-container.form-control.hotelsearch.locationlistHotels')
        .click();

        cy.get('#select2-drop > .select2-search > .select2-input')
        .type('Chicago');

        // select highlighted item from drop down
        cy.get('.select2-results-dept-1.select2-result.select2-result-selectable.select2-highlighted')
        .click();

        

        cy.get('#checkin')
        .focus({ force: true })
        .clear({ force: true })
        .type('11/01/2020',{ force: true } );

        cy.get('#checkout')
        .focus({ force: true })
        .clear({ force: true })
        .type('11/05/2020',{ force: true } );


        cy.get('.col.o2')
        .find('button')
        .first()
        .click();

        cy.get('.col.01')
        .find('button')
        .first()
        .click();

        cy.get('.col-lg-2.col-sm-12.col-xs-12')
        .find('button')
        .first()
        .click();

        cy.get('.product-long-item-wrapper > .text-center')
        .should('contain', 'No Results Found');

    });
  })