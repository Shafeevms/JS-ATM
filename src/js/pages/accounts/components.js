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
        <option value="transactions">По последней транзакции</option>
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

export const accountSkeleton = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  <header class="container loader loader__header">
    <h2 class="title loader__title">Ваши счета</h2>
    <div class="loader__select loading"></div>
    <div class="loader__btn loader__btn_big loading"></div>
  </header>
  <ul class="loader__cardlist accounts__cardlist container">
    <li class="loader__card accounts__card card">
      <div class="loader__h1 card__account loading"></div>
      <div class="loader__price loading"></div>
      <div class="loader__h2 card__title_last loading"></div>
      <div class="loader__date card__date loading"></div>
      <div class="loader__btn loader__btn_small card__btn loading"></div>
    </li>
    <li class="loader__card accounts__card card">
      <div class="loader__h1 card__account loading"></div>
      <div class="loader__price loading"></div>
      <div class="loader__h2 card__title_last loading"></div>
      <div class="loader__date card__date loading"></div>
      <div class="loader__btn loader__btn_small card__btn loading"></div>
    </li>
    <li class="loader__card accounts__card card">
      <div class="loader__h1 card__account loading"></div>
      <div class="loader__price loading"></div>
      <div class="loader__h2 card__title_last loading"></div>
      <div class="loader__date card__date loading"></div>
      <div class="loader__btn loader__btn_small card__btn loading"></div>
    </li>
    <li class="loader__card accounts__card card">
      <div class="loader__h1 card__account loading"></div>
      <div class="loader__price loading"></div>
      <div class="loader__h2 card__title_last loading"></div>
      <div class="loader__date card__date loading"></div>
      <div class="loader__btn loader__btn_small card__btn loading"></div>
    </li>
    <li class="loader__card accounts__card card">
      <div class="loader__h1 card__account loading"></div>
      <div class="loader__price loading"></div>
      <div class="loader__h2 card__title_last loading"></div>
      <div class="loader__date card__date loading"></div>
      <div class="loader__btn loader__btn_small card__btn loading"></div>
    </li>
    <li class="loader__card accounts__card card">
      <div class="loader__h1 card__account loading"></div>
      <div class="loader__price loading"></div>
      <div class="loader__h2 card__title_last loading"></div>
      <div class="loader__date card__date loading"></div>
      <div class="loader__btn loader__btn_small card__btn loading"></div>
    </li>
  </ul>`
return div;
}
