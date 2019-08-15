export class LogisticsTrackerPage {

  static open() {
    cy.visit('/');
  }

  static tableBody() {
    return cy.get('tbody');
  }

  static tableBodyRows() {
    return this.tableBody().find('tr');
  }

  static assertHeader(name) {
    cy.contains('h1', name);
  }

  static tableFilter() {
    return cy.get('input');
  }

}
