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
