import Choices from 'choices.js';
import { ISODateToText } from '../../helpers';
import { redirect } from '../../router';
import {
  numberWithSpaces,
  minusAmmountDenied,
  saveAccountToLocalStorage,
  showError,
  deleteError,
  filterStringInArray,
} from './helpers';
import { transferAmmount } from './api';

const infoPageComponent = (data) => {
  const { account, balance, transactions } = data;
  const lastTransaction = transactions.pop();
  const date = new Date(lastTransaction.date);

  console.log(lastTransaction, date);
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
      <ul class="an_form__autocomlete"></ul>
      <div class="an_form__misstake"></div>
      <legend class="an_form__legend">Новый&nbsp;перевод</legend>
      <label class="an_form__label an_form__label_select" for="transaction">Номер счета получателя</label>
      <input class="an_form__select" name="transaction" autocomplete="off">
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

  const inputAccount = div.querySelector('.an_form__select');
  const inputSumm = div.querySelector('.an_form__summ');
  const form = div.querySelector('.an_form');
  const btnBack = div.querySelector('.details__btn');
  const select = div.querySelector('.an_form__autocomlete');

  inputAutoComplete(inputAccount, select);
  minusAmmountDenied(inputSumm);
  deleteError(form);
  selectHelper(select, inputAccount);
  formListener(form, account, inputAccount, inputSumm);

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
  return array
    .slice(-10)
    .sort((a, b) => { a.date - b.date })
    .reduceRight((acc, line) => {
      acc += transactionComponent(line, currentAccount);
      // eslint-disable-next-line prefer-template
      return '<li>' + acc + '</li>';
    }, '');
};

const formListener = (el, currentAccount, inputAccount, inputSumm) => {
  el.addEventListener('submit', async (e) => {
    e.preventDefault();
    const transferInfo = {
      from: currentAccount,
      to: inputAccount.value,
      amount: inputSumm.value,
    };
    console.log(transferInfo, 'transferInfo');
    const res = await transferAmmount(transferInfo);
    const { error } = res;
    if (error) {
      showError(el, error);
      return;
    }
    saveAccountToLocalStorage(inputAccount.value);

    redirect(`accounts?id=${currentAccount}`);
  });
};

const inputAutoComplete = ((input, select) => {
  let arrayAccounts = [];
  let options = '';
  input.addEventListener('input', (e) => {
    e.preventDefault();
    if (arrayAccounts.length === 0) {
      arrayAccounts = [...JSON.parse(localStorage.getItem('accounts'))];
    }
    const complete = filterStringInArray(arrayAccounts, input.value);
    if (complete.length > 0) {
      select.classList.add('visible');
      options = complete.reduce((el, acc) => {
        acc += el;
        return '<li class="an_form__autocomlet-item">' + acc + '</li>';
      }, '');
      select.innerHTML = options;
    } else select.innerHTML = '';
  });
});

const selectHelper = (select, input) => {
  select.addEventListener('click', (e) => {
    console.log(e.target === select.querySelector('li'), 'интересно почему false');
    // ниже делал условие как в console.log - не работало;
    if (e.target.closest('li')) {
      input.value = e.target.innerText;
      select.classList.remove('visible');
    }
  });
};

export default infoPageComponent;
