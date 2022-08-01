import { headerButtonsEnable, renderComponent } from '../../helpers';
import { accountsPageComponent, accountCardComponent } from './components';
import getAccounts from './api';
import { userAccount } from '../../store';

export const renderCards = async () => {
  root.innerHTML = '';
  const { payload } = await getAccounts();
  userAccount.data = payload;
  console.log(payload);
  renderComponent(root, accountsPageComponent());
  const ul = document.querySelector('.accounts__cardlist');
  userAccount.data.forEach((card) => renderComponent(ul, accountCardComponent(card)));
  console.log('userAccount', userAccount);
};

export const accountsPage = async (id) => {
  headerButtonsEnable();
  if (id) {
    root.innerHTML = id;
  } else {
    await renderCards();
  }
};
