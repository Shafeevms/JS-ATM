/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('page "accounts"', () => {
  const enterWithAccount = () => {
    cy.get('.accounts__card')
      .last()
      .find('.card__account')
      .then(($account) => $account.text())
      .then((val) => {
        cy.get('.accounts__card')
          .first()
          .contains('Открыть')
          .click();
        cy.get('.an_form__select')
          .type(val);
      });
  };

  beforeEach(() => {
    cy.wait(1000);
  });

  before(() => {
    window.sessionStorage.removeItem('token');
    cy.visit('http://localhost:8080/login');
    cy.get('input[name=login]').type('developer');
    cy.get('input[name=password]').type('skillbox');
    cy.get('button').click();

    cy.get('.accounts__card')
      .as('cards')
      .its('length')
      .then((length) => {
        for (let i = length; i < 2; i++) {
          cy.get('.accounts__btn').click();
        }
      });
  });

  it('have minimum two cards', () => {
    cy.get('@cards')
      .its('length')
      .should('be.gt', 1);
  });

  it('send money to unknown account', () => {
    cy.get('.accounts__card')
      .first()
      .contains('Открыть')
      .click();
    cy.get('.an_form__btn')
      .as('btnSend')
      .click();
    cy.wait(1000);
    cy.get('.an_form__misstake')
      .as('misstake')
      .should('have.text', 'Invalid account to');
  });

  it('return to account page', () => {
    cy.get('.details__account')
      .then(($h) => {
        const account = $h.text();
        cy.url().should('include', account);
      });
    cy.get('.details__btn').click();
  });

  it('send more money it have', () => {
    enterWithAccount();
    cy.get('.an_form__summ')
      .type(1000000000000);
    cy.get('.an_form__btn')
      .click();
    cy.get('.an_form__misstake')
      .should('have.text', 'Overdraft prevented');
    cy.get('.details__btn').click();
  });

  it('send 777 to another account', () => {
    enterWithAccount();
    cy.get('.an_form__summ')
      .type(777);
    cy.get('.an_form__btn')
      .click();
    cy.get('.an_form__misstake')
      .should('have.text', '');
    cy.get('.an-table__body-item')
      .contains('777')
      .should('have.class', 'an-table__summ_negative');
  });
});
