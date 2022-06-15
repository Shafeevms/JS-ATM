import { renderComponent } from '../../helpers';
import { accountsPageComponent, accountCardComponent } from './components';
import { headerButtonsComponent } from '../../components';
import getAccounts from './api';
import { userAccount } from '../../store';

const header = document.querySelector('.header__container');

export const renderCards = async () => {
  root.innerHTML = '';
  const { payload } = await getAccounts();
  userAccount.data = payload;
  renderComponent(root, accountsPageComponent());
  const ul = document.querySelector('.accounts__cardlist');
  userAccount.data.forEach((card) => renderComponent(ul, accountCardComponent(card)));
};

export const accountsPage = async (id) => {
  header.lastElementChild !== document.querySelector('.header__wrapper')
  && renderComponent(header, headerButtonsComponent('accounts'));
  if (id) {
    root.innerHTML = id;
  } else {
    await renderCards();
  }
};
