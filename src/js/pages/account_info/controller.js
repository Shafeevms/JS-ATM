import { redirect } from '../../router';
import {
  minusAmmountDenied,
  deleteError,
  filterStringInArray,
  getHistoryBalance,
} from './helpers';

const controller = (html, data) => {
  const { account } = data;
  const preparedDatatoChart = getHistoryBalance(data, 6);
  const inputAccount = html.querySelector('.an_form__select');
  const inputSumm = html.querySelector('.an_form__summ');
  const form = html.querySelector('.an_form');
  const btnBack = html.querySelector('.details__btn');
  const select = html.querySelector('.an_form__autocomlete');
  const chart = html.querySelector('.an_graphs');

  inputAutoComplete(inputAccount, select);
  minusAmmountDenied(inputSumm);
  deleteError(form);
  selectHelper(select, inputAccount);
  formListener(form, account, inputAccount, inputSumm);

  btnBack.addEventListener('click', () => redirect('accounts'));
  chart.addEventListener('click', () => redirect(`accounts?id=${account}&history=true`));
};

const inputAutoComplete = ((input, select) => {
  let arrayAccounts = [];
  let options = '';
  input.addEventListener('input', (e) => {
    e.preventDefault();
    if (arrayAccounts.length === 0) {
      arrayAccounts = [...JSON.parse(localStorage.getItem('accounts'))];
    }
    const complete = filterStringInArray(arrayAccounts, input.value);
    if (complete.length > 0) {
      select.classList.add('visible');
      options = complete.reduce((el, acc) => {
        acc += el;
        return '<li class="an_form__autocomlet-item">' + acc + '</li>';
      }, '');
      select.innerHTML = options;
    } else select.innerHTML = '';
  });
});

const selectHelper = (select, input) => {
  select.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
      input.value = e.target.innerText;
      select.classList.remove('visible');
    }
  });
};

const formListener = (el, currentAccount, inputAccount, inputSumm) => {
  el.addEventListener('submit', async (e) => {
    e.preventDefault();
    const transferInfo = {
      from: currentAccount,
      to: inputAccount.value,
      amount: inputSumm.value,
    };
    const res = await transferAmmount(transferInfo);
    const { error } = res;
    if (error) {
      showError(el, error);
      return;
    }
    saveAccountToLocalStorage(inputAccount.value);

    redirect(`accounts?id=${currentAccount}`);
  });
};

export default controller;
