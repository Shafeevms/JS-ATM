import { renderCards } from './index';
import { createAccount } from '../../api';
import { userAccount } from '../../store';
import { renderComponent } from '../../helpers';
import { accountCardComponent } from './components';

export const openNewAccount = async () => {
  await createAccount();
  renderCards();
};

export const sortAccounts = (e) => {
  const list = document.querySelector('.accounts__cardlist');
  const option = e.target.value;
  const { data } = userAccount;
  list.innerHTML = '';
  data
    .sort((a, b) => compareFn(a, b, option))
    .forEach((card) => renderComponent(list, accountCardComponent(card)));
  console.log(data, data.sort((a, b) => a.option - b.option));
};

const compareFn = (a, b, option) => {
  if (option === 'transactions') {
    const dateA = Date.parse(a[option][a[option].length - 1].date);
    const dateB = Date.parse(b[option][b[option].length - 1].date);
    return dateB - dateA;
  }
  return b[option] - a[option];
};
