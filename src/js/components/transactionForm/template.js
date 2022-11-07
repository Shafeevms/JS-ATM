const transactionForm = () => `
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
      <span class="btn-text js-btn">Отправить</span>
    </button>
  </form>`;

export default transactionForm;
