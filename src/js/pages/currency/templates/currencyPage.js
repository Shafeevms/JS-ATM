import clientCurrencyChunk from './clientCurrency';
import currencyOptionsChunk from './currencyOptions';

const currencyPage = ({ clientCurrencies, allCurrencies }) => `<div class="currency container">
    <h2 class="currency__title title">Валютный обмен</h2>
    <section class="currency__your-currency your-currency">
      <h3 class="your-currency__title">Ваши валюты</h3>
      <ul class="your-currency__list">
      ${clientCurrencyChunk(clientCurrencies)}
      </ul>
    </section>
    <section class="currency__exchange exchange">
      <div class="exchange__wrap">
        <h3 class="exchange__title">Обмен валюты</h3>
        <h4 class="exchange__mistake"></h4>
      </div>
      <form class="exchange__form">
        <div class="exchange__wrapper exchange__wrapper_fst-line">
          <label for="from">Из</label>
          <select name="from" class="exchange__from">
            ${currencyOptionsChunk(allCurrencies)}
          </select>
          <label for="to">в</label>
          <select name="to" class="exchange__to">
            ${currencyOptionsChunk(allCurrencies)}
          </select>
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

      </ul>
    </section>
  </div>`;

export default currencyPage;
