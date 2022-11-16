/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('enter to account history', () => {
  before(() => {
    window.sessionStorage.removeItem('token');
    cy.visit('http://localhost:8080/login');
    cy.get('input[name=login]').type('developer');
    cy.get('input[name=password]').type('skillbox');
    cy.get('button').click();

    cy.get('.accounts__card')
      .its('length')
      .then((length) => {
        if (length === 0) {
          cy.get('.accounts__btn').click();
        }
      });
  });

  it('enter to account history', () => {
    cy.get('.accounts__card')
      .first()
      .find('.card__account')
      .then(($account) => $account.text())
      .then((val) => {
        cy.contains('Открыть')
          .click();
        cy.wait(1000);
        cy.get('.an_graphs').click();
        cy.url().should('include', `${val}/history`);
      });
  });
});
