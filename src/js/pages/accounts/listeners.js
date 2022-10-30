import accountsPage from '.';
import { createAccount } from '../../api';
import { userAccount } from '../../store';
import { module } from '../../core';
import cardPage from '../../components/card';

export const openAccountHandler = () => {
  createAccount();
  accountsPage();
};

export const sortAccountsHandler = (e) => {
  const list = document.querySelector('.accounts__cardlist');
  const option = e.target.value;
  const { data } = userAccount;
  list.innerHTML = '';
  data
    .sort((a, b) => compareFn(a, b, option))
    .forEach((card) => module({ component: cardPage, parent: list })(card));
};

const compareFn = (a, b, option) => {
  if (option === 'transactions') {
    const dateA = Date.parse(a[option][a[option].length - 1]?.date);
    const dateB = Date.parse(b[option][b[option].length - 1]?.date);
    return dateB - dateA;
  }
  return b[option] - a[option];
};
