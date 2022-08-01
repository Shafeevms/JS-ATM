import { ISODateToText } from '../../helpers';
import { openNewAccount, sortAccounts } from './listeners';
import { redirect } from '../../router';

export const accountsPageComponent = () => {
  const div = document.createElement('div');
  div.className = 'accounts container';
  div.innerHTML = `
    <header class="accounts__header">
      <h2 class="accounts__title title">Ваши счета</h2>
      <select name="sort" class="accounts__select">
        <option value="">Сортировка</option>
        <option value="account">По номеру</option>
        <option value="balance">По балансу</option>
        <option value="date">По последней транзакции</option>
      </select>
      <button class="accounts__btn btn">+ Создать новый счет</button>
    </header>
    <ul class="accounts__cardlist">
    </ul>`;
  div.querySelector('.accounts__btn').addEventListener('click', openNewAccount);
  div.querySelector('.accounts__select').addEventListener('change', sortAccounts);
  return div;
};

export const accountCardComponent = (obj) => {
  const { account, balance, transactions } = obj;
  console.log(obj);
  const lastDate = transactions[transactions.length - 1]?.date;
  const li = document.createElement('li');
  li.className = 'accounts__card card';
  li.innerHTML = `
    <h3 class="card__account">${account}</h3>
    <span class="card__account-sum">${balance}</span>
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
