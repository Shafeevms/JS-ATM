import { ISODateToText } from './helpers';
import listener from './listeners';
import { redirect } from './router';

export const loginComponent = (err) => {
  const div = document.createElement('div');
  div.classList.add('login');
  div.innerHTML = `
  <form class="login__form">
    <h2 class="login__title title">Вход в аккаунт</h2>
    <h3 class="${err ? '' : 'visually-hidden'} login__alert">${err ? err : 'введите корректный логин и пароль'}</h3>
    <input type="text" name="login" class="login__input ${err === 'No such user' ? 'invalid' : 'valid'}" id="login" placeholder="Введите логин">
    <input type="password" name="password" class="login__input ${err === 'Invalid password' ? 'invalid' : 'valid'}" id="password" placeholder="Введите пароль">
    <button type="submit" class="login__btn btn">Войти</button>
  </form>`;
  return div;
};

export const headerButtonsComponent = (pressBtn) => {
  const div = document.createElement('div');
  div.classList.add('header__wrapper');
  div.innerHTML = `
    <a href="atm" class="header__btn ${pressBtn === 'atm' ? 'header__btn_pressed' : ''}">Банкоматы</a>
    <a href="accounts" class="header__btn ${pressBtn === 'accounts' ? 'header__btn_pressed' : ''}">Счета</a>
    <a href="currency" class="header__btn ${pressBtn === 'currency' ? 'header__btn_pressed' : ''}">Валюта</a>
    <a href="login" class="header__btn">Выйти</a>`;
  return div;
};

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
  div.querySelector('.accounts__btn').addEventListener('click', listener.openNewAccount);
  div.querySelector('.accounts__select').addEventListener('change', listener.sortAccounts);
  return div;
};

export const accountCardComponent = (obj) => {
  const { account, balance, transactions } = obj;
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
    console.log('Нажатие на кнопку в карточке');
    redirect(`/accounts?id=${account}`);
  });
  return li;
};
