const dayjs = require('dayjs');

const cardComponent = (obj) => {
  const { account, balance, transactions } = obj;
  const lastDate = dayjs(transactions[transactions.length - 1]?.date).format('D MMMM YYYY');

  return `
    <div class="accounts__card card">
      <h3 class="card__account">${account}</h3>
      <span class="card__account-sum">${balance.toFixed(2)}</span>
      <h4 class="card__title_last">Последняя транзакция:</h4>
      <span class="card__date">${lastDate}</span>
      <button class="card__btn btn">Открыть</button>
    </div>`;
};

export default cardComponent;
