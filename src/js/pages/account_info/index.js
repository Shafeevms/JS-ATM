import { renderComponent } from '../../helpers';
import './index.scss';
import infoPageComponent from './components';
import { userAccount } from '../../store';
import { getAccountId } from './api';

export const renderAccountInfo = async (id) => {
  root.innerHTML = '';
  const { payload } = await getAccountId(id);
  console.log(payload);
  userAccount.data = payload;

  // const accountData = await userAccount.data.find((el) => el.account === id);
  renderComponent(root, infoPageComponent(payload));
};

export const fn = () => { };
