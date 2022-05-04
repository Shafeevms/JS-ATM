export const loginComponent = (err) => {
  const div = document.createElement('div');
  div.classList.add('login');
  div.innerHTML = `
  <form class="login__form">
    <h2 class="login__title">Вход в аккаунт</h2>
    <h3 class="${err ? '' : 'visually-hidden'} login__alert">${err ? err : 'введите корректный логин и пароль' }</h3>
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
      <h2 class="accounts__title">Ваши счета</h2>
      <select name="sort" class="accounts__select">
        <option name="" id="">Сортировка</option>
        <option name="" id="">По номеру</option>
        <option name="" id="">По балансу</option>
        <option name="" id="">По последней транзакции</option>
      </select>
      <button class="accounts__btn btn">+ Создать новый счет</button>
    </header>
    <ul class="accounts__cardlist">
    </ul>`;
    return div;
};

export const accountCardComponent = (obj) => {
  const { account, balance, transactions } = obj;
  const li = document.createElement('li');
  li.className = 'accounts__card card'
  li.innerHTML = `
    <h3 class="card__account">${account}</h3>
    <span class="card__account-sum">${balance}</span>
    <h4 class="card__title_last">Последняя транзакция:</h4>
    <span class="card__date">${transactions[transactions.length - 1].date}</span>
    <button class="card__btn btn">Открыть</button>`;
  const btn = li.querySelector('.card__btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Нажатие на кнопку в карточке');
  });
  return li;
};
