const template = ({ withButtons }) => `
    <header class="header">
      <div class="container header__container">
        <h1 class="header__title">Coin.</h1>
        ${withButtons
    ? `<div class="header__wrapper">
          <a href = "/atm" class="header__btn">Банкоматы</a>
          <a href="/accounts" class="header__btn">Счета</a>
          <a href="/currency" class="header__btn">Валюта</a>
          <a href="/login" class="header__btn">Выйти</a>
        </div>`
    : ''}
      </div>
    </header>
  <main id="main"></main>`;

export default template;
