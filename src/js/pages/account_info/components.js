import Choices from 'choices.js';
import { ISODateToText } from '../../helpers';
import { redirect } from '../../router';
import { numberWithSpaces, minusAmmountDenied } from './helpers';
import { transferAmmount } from './api';

const infoPageComponent = (data) => {
  const { account, balance, transactions } = data;
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="details container">
  <header class="details__header">
    <h2 class="details__title">Просмотр счёта</h2>
    <h3 class="details__account">${account}</h3>
    <button class="btn details__btn">
      <span class="btn-icon btn-icon_arrow"></span>
      <span class="btn-text">Вернуться назад</span>
    </button>
    <div class="details__wrapper">
      <h4 class="details__subtitle">Баланс</h4>
      <span class="details__amount">${numberWithSpaces(balance)}</span>
    </div>
  </header>
  <section class="details__analytics an">
    <form class="an__form an_form">
      <legend class="an_form__legend">Новый&nbsp;перевод</legend>
      <label class="an_form__label an_form__label_select" for="transaction">Номер счета получателя</label>
      <input class="an_form__select" name="transaction" id="transaction">
      </input>
      <label class="an_form__label an_form__label_input" for="number">Сумма перевода</label>
      <input type="number" name="number" class="an_form__summ">
      <button class="btn btn-fiiled an_form__btn">
        <span class="btn-icon btn-icon_email">
        </span>
        <span class="btn-text js-btn">Отправить</span></button>
    </form>
    <div class="an__graphs an_graphs">
      <h2 class="an_graphs__title">Динамика баланса</h2>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </div>
    <div class="an__history an_history">
      <h2 class="an_history__title">История переводов</h2>
      <div class="an__table an-table">
        <ul class="an-table__header">
          <li class="an-table__header-item">Счет отправителя</li>
          <li class="an-table__header-item">Счет получателя</li>
          <li class="an-table__header-item">Сумма</li>
          <li class="an-table__header-item">Дата</li>
        </ul>
        <ul class="an-table__body">
          ${transactionHistoryReducer(transactions, account)}
        </ul>
      </div>
    </div>
  </section>
  </div>`;

  const inputAcc = div.querySelector('.an_form__select');
  const inputSumm = div.querySelector('.an_form__summ');
  const form = div.querySelector('.an_form');
  const btnBack = div.querySelector('.details__btn');

  minusAmmountDenied(inputSumm);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const transferInfo = {
      from: account,
      to: inputAcc.value,
      amount: inputSumm.value,
    };
    await transferAmmount(transferInfo);
  });

  btnBack.addEventListener('click', () => redirect('accounts'));
  return div;
};

const transactionComponent = (obj, currentAccount) => {
  const { amount, date, from, to } = obj;
  return `
  <ul class="an-table__body-line">
    <li class="an-table__body-item">${from}</li>
    <li class="an-table__body-item">${to}</li>
    <li class="an-table__body-item an-table__summ ${from !== currentAccount ? 'an-table__summ_positive' : 'an-table__summ_negative'}">
      ${numberWithSpaces(amount)}
    </li>
    <li class="an-table__body-item">${ISODateToText(date)}</li>
  </ul>`;
};

// eslint-disable-next-line arrow-body-style
const transactionHistoryReducer = (array, currentAccount) => {
  // JSON.parse(localStorage.getItem('accounts'));
  localStorage.setItem('1', '1');
  return array
    .slice(-10)
    .sort((a, b) => { a.date - b.date })
    .reduceRight((acc, line) => {
      acc += transactionComponent(line, currentAccount);
      // eslint-disable-next-line prefer-template
      return '<li>' + acc + '</li>';
    }, '');
};

export default infoPageComponent;
