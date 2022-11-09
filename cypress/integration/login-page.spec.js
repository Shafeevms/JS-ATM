/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('enter login and change directory to main page', () => {
  beforeEach(() => {
    window.sessionStorage.removeItem('token');
    cy.wait(2000);
    cy.visit('http://localhost:8080/');
    cy.get('input[name=login]').as('login');
    cy.get('input[name=password]').as('password');
  });

  it('displays login form', () => {
    cy.get('.login__title').should('have.text', 'Вход в аккаунт');
  });

  it('url should contain "/login"', () => {
    cy.url().should('eq', 'http://localhost:8080/login');
  });

  it('sessionStorage "token" should be empty', () => {
    cy.expect(sessionStorage.getItem('token')).to.be.null;
  });

  it('enter incorrect number of symbols in login', () => {
    cy.get('@login').type('1');
    cy.get('@password').type('123456');
    cy.get('button').click();
    cy.get('@login').should('have.class', 'invalid');
    cy.get('@password').should('have.class', 'valid');
    cy.get('.login__alert').should('have.text', 'Введите корректный логин и пароль')
  });

  it('enter correct but invalid password', () => {
    cy.get('@login').type('developer');
    cy.get('@password').type('skillboxx');
    cy.get('button').click();
    cy.get('@login').should('have.class', 'valid');
    cy.get('@password').should('have.class', 'invalid');
    cy.get('.login__alert').should('have.text', 'Invalid password');
  });

  it('enter incorrect number of symbols in password', () => {
    cy.get('@login').type('123456');
    cy.get('@password').type('1');
    cy.get('button').click();
    cy.get('@login').should('have.class', 'valid');
    cy.get('@password').should('have.class', 'invalid');
    cy.get('.login__alert').should('have.text', 'Введите корректный логин и пароль')
  });

  it('enter correct but invalid login', () => {
    cy.get('@login').type('developerr');
    cy.get('@password').type('123456');
    cy.get('button').click();
    cy.get('@login').should('have.class', 'invalid');
    cy.get('@password').should('have.class', 'valid');
    cy.get('.login__alert').should('have.text', 'No such user');
  });

  it('enter space in login', () => {
    cy.get('@login').type('1234 56');
    cy.get('@password').type('123456');
    cy.get('button').click();
    cy.get('@login').should('have.class', 'invalid');
    cy.get('@password').should('have.class', 'valid');
    cy.get('.login__alert').should('have.text', 'Введите корректный логин и пароль');
  });

  it('enter space in password', () => {
    cy.get('@login').type('123456');
    cy.get('@password').type('121 234234');
    cy.get('button').click();
    cy.get('@login').should('have.class', 'valid');
    cy.get('@password').should('have.class', 'invalid');
    cy.get('.login__alert').should('have.text', 'Введите корректный логин и пароль');
  });

  it('enter correct login and password', () => {
    cy.get('@login').type('developer');
    cy.get('@password').type('skillbox');
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:8080/accounts');
  });
});
