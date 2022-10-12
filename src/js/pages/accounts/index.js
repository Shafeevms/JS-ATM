import { headerButtonsEnable, renderComponent } from '../../helpers';
import { accountsPageComponent, accountCardComponent } from './components';
import getAccounts from './api';
import { userAccount } from '../../store';
import { renderAccountInfo } from '../account_info';

export const renderCards = async () => {
  root.innerHTML = '';
  const { payload } = await getAccounts();
  userAccount.data = payload;
  renderComponent(root, accountsPageComponent());
  const ul = document.querySelector('.accounts__cardlist');
  userAccount.data.forEach((card) => renderComponent(ul, accountCardComponent(card)));
};

export const accountsPage = async (id) => {
  headerButtonsEnable('accounts');
  if (id) {
    await renderAccountInfo(id);
  } else {
    await renderCards();
  }
};
