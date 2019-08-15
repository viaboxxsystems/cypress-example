import {LogisticsTrackerPage} from '../pageobjects/logisticstracker.page';

describe('Logistics tracker page test suite', () => {

  beforeEach(() => {

    cy.server();

    cy.fixture('logistics_tracker.json').then((json) => {
      cy.route('GET', '/api/pallet', json);
    });

    LogisticsTrackerPage.open();

  });

  it('contains header', () => {

    LogisticsTrackerPage.assertHeader('Logistics tracker');
  });

  it('filter logistics tracker table values', () => {

    LogisticsTrackerPage.tableBodyRows()
      .should('have.length', 4);

    LogisticsTrackerPage.tableFilter()
      .type('Standing')
      .should('have.value', 'Standing');

    LogisticsTrackerPage.tableBodyRows()
      .should('have.length', 2);

    LogisticsTrackerPage.tableFilter()
      .clear()
      .type('Moving')
      .should('have.value', 'Moving');

    LogisticsTrackerPage.tableBodyRows()
      .should('have.length', 2);

    cy.reload();

    LogisticsTrackerPage.tableBodyRows()
      .should('have.length', 4);

  });

});
