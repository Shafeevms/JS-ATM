import { numberWithSpaces } from '../helpers';

const dayjs = require('dayjs');

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
    <li class="an-table__body-item">${dayjs(date).format('D MMMM YYYY')}</li>
  </ul>`;
};

const transactionHistoryChunk = (array, currentAccount) => array
  .slice(-10)
  .sort((a, b) => a.date - b.date)
  .reduceRight((acc, line) => {
    acc += transactionComponent(line, currentAccount);
    return `<li>${acc}</li>`;
  }, '');

export default transactionHistoryChunk;
