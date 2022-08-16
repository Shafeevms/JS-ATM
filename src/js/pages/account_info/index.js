import { renderComponent } from '../../helpers';
import './index.scss';
import infoPageComponent from './components';
import { userAccount } from '../../store';
import { getAccountId } from './api';

export const renderAccountInfo = async (id) => {
  root.innerHTML = '';
  const { payload } = await getAccountId(id);
  userAccount.data = payload;

  renderComponent(root, infoPageComponent(payload));
};

export const fn = () => { };
