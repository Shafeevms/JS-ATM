import { ISODateToText } from '../../helpers';
import { redirect } from '../../router';

const accountCardComponent = (obj) => {
  const { account, balance, transactions } = obj;
  const lastDate = transactions[transactions.length - 1]?.date;
  const li = document.createElement('li');
  li.className = 'accounts__card card';
  li.innerHTML = `
    <h3 class="card__account">${account}</h3>
    <span class="card__account-sum">${balance.toFixed(2)}</span>
    <h4 class="card__title_last">Последняя транзакция:</h4>
    <span class="card__date">${ISODateToText(lastDate)}</span>
    <button class="card__btn btn">Открыть</button>`;
  const btn = li.querySelector('.card__btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    redirect(`/accounts?id=${account}`);
  });
  return li;
};

export default accountCardComponent;
