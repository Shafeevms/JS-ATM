import './index.scss';
import { renderComponent, headerButtonsEnable } from '../../helpers';
import { historyPageComponent } from './components';
import { userAccount } from '../../store';
import { getAccountId } from './api';

export const historyPage = async (id) => {
  headerButtonsEnable('accounts');
  root.innerHTML = '';
  const { payload } = await getAccountId(id);
  userAccount.data = payload;

  //? в функции ниже есть асинхронность, нужно ли перед RenderComponent или infoPageComponent ставить await?
  renderComponent(root, historyPageComponent(payload));
};
