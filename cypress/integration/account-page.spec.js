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
});

//cy.url().should('contain', '/login-successful')
