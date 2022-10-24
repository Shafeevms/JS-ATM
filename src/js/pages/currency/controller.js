import getCurrencyBuy from './api/getCurrencyBuy';
import currencyFeedSocket from './api/currencyFeedSocket';
import realtimeLinesChunk from './templates/realtimeLines';
import clientCurrencyChunk from './templates/clientCurrency';

import { headerButtonsEnable } from '../../helpers';

const controller = (html) => {
  headerButtonsEnable('currency');

  const mistake = html.querySelector('.exchange__mistake');
  const currencyFrom = html.querySelector('.exchange__from');
  const currencyTo = html.querySelector('.exchange__to');
  const exchangeSum = html.querySelector('.exchange__sum');
  const currencyList = html.querySelector('.your-currency__list');
  const form = html.querySelector('.exchange__form');
  const realTimeCurrencyList = html.querySelector('.real-time__list');

  [currencyFrom, currencyTo, exchangeSum]
    .forEach((el) => {
      el.addEventListener('focus', () => {
        mistake.innerHTML = '';
      });
    });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const transaction = await getCurrencyBuy({
        from: currencyFrom.value,
        to: currencyTo.value,
        sum: exchangeSum.value,
      });

      currencyList.innerHTML = clientCurrencyChunk(transaction);
    } catch (error) {
      mistake.innerHTML = error;
    }
    exchangeSum.value = '';
  });

  currencyFeedSocket((data) => {
    realTimeCurrencyList.appendChild(realtimeLinesChunk(data));

    if (realTimeCurrencyList.childNodes.length > 14) {
      realTimeCurrencyList.removeChild(realTimeCurrencyList.getElementsByTagName('li')[0]);
    }
  });
};

export default controller;
