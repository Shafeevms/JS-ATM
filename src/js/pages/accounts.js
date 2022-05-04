import { renderComponent } from '../helpers';
import {
  accountsPageComponent,
  headerButtonsComponent,
  accountCardComponent,
} from '../components';
import { getAccounts } from '../api';
import { userAccount } from '../store';

const header = document.querySelector('.header');

export const accountsPage = async () => {
  renderComponent(header, headerButtonsComponent('accounts'));
  await renderCards();
};

export const renderCards = async () => {
  root.innerHTML = '';
  const data = await getAccounts();
  userAccount.data = data.payload;
  // userAccount = {...await getAccounts()}; // ! почему так не работает?
  console.log('userAccount: ', userAccount);
  renderComponent(root, accountsPageComponent());
  const ul = document.querySelector('.accounts__cardlist');
  userAccount.data.forEach((card) => renderComponent(ul, accountCardComponent(card)));
};
