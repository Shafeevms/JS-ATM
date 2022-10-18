import { ISODateToText } from '../../helpers';
import { redirect } from '../../router';
import {
  numberWithSpaces,
  minusAmmountDenied,
  saveAccountToLocalStorage,
  showError,
  deleteError,
  filterStringInArray,
  getHistoryBalance,
  monthReducer,
  maxRange,
  barReducer,
  barRatioReducer,
} from './helpers';
import { transferAmmount } from './api';

export const infoPageComponent = (data) => {
  const { account, balance, transactions } = data;
  const preparedDatatoChart = getHistoryBalance(data, 6);

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
          <span class="details__amount">${numberWithSpaces(balance.toFixed(2))}</span>
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
          <ul class="an_graphs__chart">
            ${barReducer(preparedDatatoChart)}
          </ul>
          <div class="an_graphs__range">
          <span class="an_graphs__max">${maxRange(preparedDatatoChart).toFixed(0)}</span>
          <span class="an_graphs__max">0</span>
          </div>
          <ul class="an_graphs__months">
            ${monthReducer(preparedDatatoChart)}
          </ul>
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
  const chart = div.querySelector('.an_graphs');

  console.log(preparedDatatoChart);

  inputAutoComplete(inputAccount, select);
  minusAmmountDenied(inputSumm);
  deleteError(form);
  selectHelper(select, inputAccount);
  formListener(form, account, inputAccount, inputSumm);

  btnBack.addEventListener('click', () => redirect('accounts'));
  chart.addEventListener('click', () => redirect(`accounts?id=${account}&history=true`));
  return div;
};

export const historyPageComponent = (data) => {
  const { account, balance, transactions } = data;
  const preparedDatatoChart = getHistoryBalance(data, 13);

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="details container">
    <header class="details__header">
      <h2 class="details__title">История баланса</h2>
      <h3 class="details__account">${account}</h3>
      <button class="btn details__btn">
        <span class="btn-icon btn-icon_arrow"></span>
        <span class="btn-text">Вернуться назад</span>
      </button>
      <div class="details__wrapper">
        <h4 class="details__subtitle">Баланс</h4>
        <span class="details__amount">${numberWithSpaces(balance.toFixed(2))}</span>
      </div>
    </header>
    <section class="details__analytics an an_fullpage">
      <div class="an__graphs an_graphs an_graphs_fullpage">
        <h2 class="an_graphs__title">Динамика баланса</h2>
        <ul class="an_graphs__chart">
          ${barReducer(preparedDatatoChart)}
        </ul>
        <div class="an_graphs__range">
        <span class="an_graphs__max">${maxRange(preparedDatatoChart).toFixed(0)}</span>
        <span class="an_graphs__max">0</span>
        </div>
        <ul class="an_graphs__months">
          ${monthReducer(preparedDatatoChart)}
        </ul>
      </div>
      <div class="an__ratio an_ratio an_ratio_fullpage">
        <h2 class="an_ratio__title">Соотношение входящих исходящих транзакций</h2>
        <ul class="an_ratio__chart">
          ${barRatioReducer(preparedDatatoChart)}
        </ul>
        <div class="an_ratio__range">
        <span class="an_ratio__max">${maxRange(preparedDatatoChart).toFixed(0)}</span>
        <span class="an_ratio__max">0</span>
        </div>
        <ul class="an_ratio__months">
          ${monthReducer(preparedDatatoChart, 1)}
        </ul>
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

  const btnBack = div.querySelector('.details__btn');

  btnBack.addEventListener('click', () => redirect(`/accounts?id=${account}`));
  return div;
};

const transactionComponent = (obj, currentAccount) => {
  const {
    amount,
    date,
    from,
    to,
  } = obj;
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

export const accountSkeletonPage = () => {
  const div = document.createElement('div');
  div.classList = 'container details-skeleton';
  div.innerHTML = `
        <header class=" details__header details-skeleton__header">
          <h2 class="details-skeleton__title">Просмотр счёта</h2>
          <div class="details-skeleton__account loading"></div>
          <div class="details-skeleton__btn loading"></div>
          <div class="details__wrapper details-skeleton__wrapper">
            <div class="details-skeleton__subtitle loading"></div>
            <div class="details-skeleton__amount loading"></div>
          </div>
        </header>
        <section class="details-skeleton__section an">
          <div class="details-skeleton__form sk-form an__form an_form">
            <h2 class="sk-form__title an_form__legend">Новый перевод</h2>
            <div class="sk-form__subtitle sk-form__subtitle_long an_form__label loading loading_dark"></div>
            <div class="sk-form__subtitle sk-form__subtitle_short an_form__label loading loading_dark"></div>
            <div class="sk-form__choise loading loading_dark"></div>
            <div class="sk-form__input an_form__input loading loading_dark"></div>
            <div class="sk-form__btn loading loading_dark"></div>
          </div>
          <div class="details-skeleton__chart sk-chart an_graphs">
            <h2 class="sk-chart__title an_graphs__title">Динамика баланса</h2>
            <ul class="sk-chart__bars an_graphs__chart">
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 77%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 52%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 37%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 91%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 100%"></li>
            </ul>
            <div class="an_graphs__range">
              <div class="sk-chart__price sk-chart__price_top loading"></div>
              <div class="sk-chart__price sk-chart__price_bottom loading"></div>
            </div>
            <ul class="sk-chart__months">
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
            </ul>
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
                <li>
                  <ul class="an-table__body-line">
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 64px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 79px;"></li>
                  </ul>
                </li>
                <li>
                  <ul class="an-table__body-line">
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 64px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 79px;"></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>`;
  return div;
};

export const historySkeletonPage = () => {
  const div = document.createElement('div');
  div.classList = 'container details-skeleton';
  div.innerHTML = `
  <header class=" details__header details-skeleton__header">
          <h2 class="details-skeleton__title">История баланса</h2>
          <div class="details-skeleton__account loading"></div>
          <div class="details-skeleton__btn loading"></div>
          <div class="details__wrapper details-skeleton__wrapper">
            <div class="details-skeleton__subtitle loading"></div>
            <div class="details-skeleton__amount loading"></div>
          </div>
        </header>
        <section class="details-skeleton__section an an_fullpage">
          <div class="details-skeleton__chart sk-chart an__ratio an_graphs an_graphs_fullpage">
            <h2 class="sk-chart__title an_graphs__title">Соотношение входящих исходящих транзакций</h2>
            <ul class="sk-chart__bars an_graphs__chart">
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 37%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 77%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 94%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 52%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 45%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 58%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 91%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 100%"></li>
            </ul>
            <div class="an_graphs__range">
              <div class="sk-chart__price sk-chart__price_top loading"></div>
              <div class="sk-chart__price sk-chart__price_bottom loading"></div>
            </div>
            <ul class="sk-chart__months">
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
            </ul>
          </div>
          <div class="details-skeleton__chart sk-chart an__graphs an_graphs an_graphs_fullpage">
            <h2 class="sk-chart__title an_graphs__title">Динамика баланса</h2>
            <ul class="sk-chart__bars an_graphs__chart">
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 37%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 77%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 94%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 52%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 45%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 58%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 100%"></li>
              <li class="sk-chart__bar an_graphs__bar loading" style="height: 91%"></li>
            </ul>
            <div class="an_graphs__range">
              <div class="sk-chart__price sk-chart__price_top loading"></div>
              <div class="sk-chart__price sk-chart__price_bottom loading"></div>
            </div>
            <ul class="sk-chart__months">
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
              <li class="sk-chart__month loading"></li>
            </ul>
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
                <li>
                  <ul class="an-table__body-line">
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 64px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 79px;"></li>
                  </ul>
                </li>
                <li>
                  <ul class="an-table__body-line">
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 64px;"></li>
                    <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 79px;"></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
  `;
  return div;
};
