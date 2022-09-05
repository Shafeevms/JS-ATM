import { openSocket, currencyBuy } from './api';

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
      <div class="exchange__wrap">
        <h3 class="exchange__title">Обмен валюты</h3>
        <h4 class="exchange__mistake"></h4>
      </div>
      <form class="exchange__form">
        <div class="exchange__wrapper exchange__wrapper_fst-line">
          <label for="from">Из</label>
          <select name="from" class="exchange__from">
            ${makeCurrencyOptions(allCurrencies)}
          </select>
          <label for="to">в</label>
          <select name="to" class="exchange__to">
            ${makeCurrencyOptions(allCurrencies)}
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
        <li class="real-time__line">
          <div class="real-time__name">BTC/ETH</div>
          <div class="real-time__dots"></div>
          <div class="real-time__sum">6.3123545131</div>
          <div class="real-time__mark"></div>
        </li>
      </ul>
    </section>
  </div>`;

  const form = div.querySelector('.exchange__form');
  const currencyFrom = div.querySelector('.exchange__from');
  const currencyTo = div.querySelector('.exchange__to');
  const exchangeSum = div.querySelector('.exchange__sum');
  const currencyList = div.querySelector('.your-currency__list');
  const mistake = div.querySelector('.exchange__mistake');

  formListener(form, currencyFrom, currencyTo, exchangeSum, currencyList, mistake);

  return div;
};

const formListener = async (form, from, to, sum, list, mistake) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    [from, to, sum]
      .forEach((el) => {
        el.addEventListener('click', () => {
          mistake.innerHTML = '';
        });
      });

    const { payload: transaction, error } = await currencyBuy(
      {
        from: from.value,
        to: to.value,
        amount: sum.value,
      },
    );

    if (error) {
      mistake.innerHTML = error;
      return;
    }
    list.innerHTML = clientCurrencyReducer(transaction);
    sum.value = '';
  });
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

const makeCurrencyOptions = (arr) => arr.reduce((acc, el) => acc += `<option>${el}</option>`, '');

export default currencyPageComponent;
