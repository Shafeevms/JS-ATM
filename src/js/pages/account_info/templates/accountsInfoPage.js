const accountInfoPage = () => `
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
      <form class="an__form an_form">
        <ul class="an_form__autocomlete"></ul>
        <div class="an_form__misstake"></div>
        <legend class="an_form__legend">Новый&nbsp;перевод</legend>
        <label class="an_form__label an_form__label_select" for="transaction">Номер счета получателя</label>
        <input class="an_form__select" name="transaction" autocomplete="off">
        <label class="an_form__label an_form__label_input" for="number">Сумма перевода</label>
        <input type="number" name="number" class="an_form__summ">
        <button class="btn btn-fiiled an_form__btn">
          <span class="btn-icon btn-icon_email">
          </span>
          <span class="btn-text js-btn">Отправить</span></button>
      </form>
      <div class="an__graphs an_graphs">
        <h2 class="an_graphs__title">Динамика баланса</h2>
        <ul class="an_graphs__chart">
          ${barReducer(preparedDatatoChart)}
        </ul>
        <div class="an_graphs__range">
        <span class="an_graphs__max">${maxRange(preparedDatatoChart).toFixed(0)}</span>
        <span class="an_graphs__max">0</span>
        </div>
        <ul class="an_graphs__months">
          ${monthReducer(preparedDatatoChart)}
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

export default accountInfoPage;
