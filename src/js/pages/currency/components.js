import { openSocket } from './api';

const currencyPageComponent = (data) => {
  const div = document.createElement('div');
  openSocket();
  const [{ payload: allCurrencies }, { payload: clientCurrencies }] = data;

  //! allCurrencies - arr; clientCurrencies - obj;

  div.innerHTML = `
  <div class="currency container">
    <h2 class="currency__title title">Валютный обмен</h2>
    <section class="currency__your-currency your-currency">
      <h3 class="your-currency__title">Ваши валюты</h3>
      <ul class="your-currency__list">
      ${clientCurrencyReducer(clientCurrencies)}
      </ul>
    </section>
    <section class="currency__exchange exchange">
      <h3 class="exchange__title">Обмен валюты</h3>
      <form class="exchange__form">
        <div class="exchange__wrapper exchange__wrapper_fst-line">
          <label for="from">Из</label>
          <select name="from" class="exchange__from"></select>
          <label for="to">в</label>
          <select name="to" class="exchange__to"></select>
        </div>
        <div class="exchange__wrapper exchange__wrapper_snd-line">
          <label for="sum">Сумма</label>
          <input type="number" name="sum" class="exchange__sum">
        </div>
        <button type="submit" class="exchange__btn btn">Обменять</button>
      </form>
    </section>
    <section class="currency__real-time real-time">
      <h3 class="real-time__title">Изменение курсов в реальном времени</h3>
      <ul class="real-time__list">
        <li class="real-time__line">
          <div class="real-time__name">BTC/ETH</div>
          <div class="real-time__dots"></div>
          <div class="real-time__sum">6.3123545131</div>
          <div class="real-time__mark"></div>
        </li>
      </ul>
    </section>
  </div>`;
  return div;
};

const clientCurrencyReducer = (obj) => (
  Object
    .values(obj)
    .reduce((acc, el) => {
      const { code, amount } = el;
      return acc += `
        <li class="your-currency__line currency-line">
          <div class="currency-line__name">${code}</div>
          <div class="currency-line__dots"></div>
          <div class="currency-line__num">${amount}</div>
        </li>`;
    }, '')
);

export default currencyPageComponent;
