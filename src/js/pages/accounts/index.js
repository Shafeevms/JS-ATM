import { headerButtonsEnable, renderComponent } from '../../helpers';
import accountsPageComponent from './AccountsPageComponent.js';
import accountSkeleton from './AccountSkeletonPage';
import accountCardComponent from './AccountCardPage';
import getAccounts from './api';
import { userAccount } from '../../store';

import './index.scss';

const accountsPage = async () => {
  headerButtonsEnable('accounts');
  root.innerHTML = '';
  renderComponent(root, accountSkeleton());
  const { payload } = await getAccounts();
  userAccount.data = payload;
  root.innerHTML = '';
  renderComponent(root, accountsPageComponent());
  const ul = document.querySelector('.accounts__cardlist');
  userAccount.data.forEach((card) => renderComponent(ul, accountCardComponent(card)));
};

export default accountsPage;
