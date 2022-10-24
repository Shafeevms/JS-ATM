import accountsPage from '.';
import { createAccount } from '../../api';
import { userAccount } from '../../store';
import { renderComponent } from '../../helpers';
import accountCardComponent from './AccountCardPage';

export const openNewAccount = async () => {
  await createAccount();
  accountsPage();
};

export const sortAccounts = (e) => {
  const list = document.querySelector('.accounts__cardlist');
  const option = e.target.value;
  const { data } = userAccount;
  list.innerHTML = '';
  data
    .sort((a, b) => compareFn(a, b, option))
    .forEach((card) => renderComponent(list, accountCardComponent(card)));
};

const compareFn = (a, b, option) => {
  if (option === 'transactions') {
    const dateA = Date.parse(a[option][a[option].length - 1]?.date);
    const dateB = Date.parse(b[option][b[option].length - 1]?.date);
    return dateB - dateA;
  }
  return b[option] - a[option];
};
