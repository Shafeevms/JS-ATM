import { userAccount } from '../../../store';

import {
  getHistoryBalance,
  numberWithSpaces,
  maxRange,
} from '../helpers';

import transactionHistoryReducer from './transactionHistoryChunk';
import printMonths from './printMonths';
import printBars from './printBars';

const accountInfoPage = () => {
  const { account, balance, transactions } = userAccount.data;
  const preparedDatatoChart = getHistoryBalance(userAccount.data, 6);
  return `
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

      <div class="an__graphs an_graphs">
        <h2 class="an_graphs__title">Динамика баланса</h2>
        <ul class="an_graphs__chart">
          ${printBars(preparedDatatoChart)}
        </ul>
        <div class="an_graphs__range">
        <span class="an_graphs__max">${maxRange(preparedDatatoChart).toFixed(0)}</span>
        <span class="an_graphs__max">0</span>
        </div>
        <ul class="an_graphs__months">
          ${printMonths(preparedDatatoChart)}
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
};

export default accountInfoPage;
