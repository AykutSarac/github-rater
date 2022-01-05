/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('get ratings for valid user', () => {
  it('gets rating', () => {
    // visit homepage
    cy.visit('/');

    // submit valid username
    cy.findByPlaceholderText(/github username/i).type('aykutsarac');
    cy.findByRole('button', { name: /analyze/i }).click();

    // check if score exists
    cy.get('[data-test=overall-score]').then((result) => {
      expect(parseFloat(result.text())).to.match(/[0-9]+/);
    });
  });
});
