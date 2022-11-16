/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('page "accounts"', () => {
  before(() => {
    window.sessionStorage.removeItem('token');
    cy.visit('http://localhost:8080/login');
    cy.get('input[name=login]').type('developer');
    cy.get('input[name=password]').type('skillbox');
    cy.get('button').click();
  });

  it('url should contain "/accounts"', () => {
    cy.url().should('eq', 'http://localhost:8080/accounts');
  });

  it('sessionStorage has "token"', () => {
    cy.expect(sessionStorage.getItem('token')).have.length(24);
  });

  it('header consist navigation buttons', () => {
    cy.get('.header__wrapper').find('a');
  });

  it('button "счета" has class "header__btn_pressed"', () => {
    cy.get('.header__wrapper')
      .contains('Счета')
      .should('have.class', 'header__btn_pressed');
  });

  it('open new card', () => {
    cy.get('.accounts__card')
      .as('cards')
      .its('length')
      .then((length) => {
        cy.get('.accounts__btn').click();
        cy.wait(1000);
        cy.get('@cards').its('length').should('eq', length + 1);
      });
  });
});
