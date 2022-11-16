/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('page "currency"', () => {
  before(() => {
    window.sessionStorage.removeItem('token');
    cy.visit('http://localhost:8080/login');
    cy.get('input[name=login]').type('developer');
    cy.get('input[name=password]').type('skillbox');
    cy.get('button').click();
    cy.get('.header__wrapper')
      .contains('Валюта')
      .click();
  });

  it('currency page is opened, url: / currency', () => {
    cy.url().should('eq', 'http://localhost:8080/currency');
  });

  it('there are elements on page', () => {
    cy.get('.your-currency__list')
      .find('.currency-line')
      .its('length')
      .should('gt', 1);
    cy.get('.exchange__from')
      .children()
      .its('length')
      .should('gt', 1);
  });

  it('change currency', () => {
    cy.get('.your-currency__list')
      .find('.currency-line')
      .first()
      .find('.currency-line__num')
      .then(($el) => Math.floor($el.text()))
      .then((text) => {
        cy.get('.exchange__from')
          .select('AUD');
        cy.get('.exchange__to')
          .select('USD');
        cy.get('.exchange__sum')
          .type(text);
        cy.get('.exchange__btn')
          .click();
      });
    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.get('.your-currency__list')
      .find('.currency-line')
      .first()
      .find('.currency-line__num')
      .then(($el) => {
        expect(Number($el.text())).to.be.lessThan(1);
      });
  });
});
