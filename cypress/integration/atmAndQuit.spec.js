/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('page "ATM"', () => {
  before(() => {
    window.sessionStorage.removeItem('token');
    cy.visit('http://localhost:8080/login');
    cy.get('input[name=login]').type('developer');
    cy.get('input[name=password]').type('skillbox');
    cy.get('button').click();
    cy.get('.header__wrapper')
      .contains('Банкоматы')
      .click();
  });

  it('currency page is opened, url: /atm', () => {
    cy.url().should('eq', 'http://localhost:8080/atm');
  });

  it('button "Банкоматы" has class "header__btn_pressed"', () => {
    cy.get('.header__wrapper')
      .contains('Банкоматы')
      .should('have.class', 'header__btn_pressed');
  });

  it('quit to "login"', () => {
    cy.get('.header__wrapper')
      .contains('Выйти')
      .click();
    cy.url().should('eq', 'http://localhost:8080/login');
  });

  it('after quit, sessionStorage token is vanished', () => {
    cy.expect(sessionStorage.getItem('token')).to.be.null;
  });
});
