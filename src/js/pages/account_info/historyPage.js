import './index.scss';
import { renderComponent, headerButtonsEnable } from '../../helpers';
import { historyPageComponent, historySkeletonPage } from './components';
import { userAccount } from '../../store';
import { getAccountId } from './api';

export const historyPage = async (id) => {
  headerButtonsEnable('accounts');
  root.innerHTML = '';
  renderComponent(root, historySkeletonPage())
  const { payload } = await getAccountId(id);
  userAccount.data = payload;
  root.innerHTML = '';
  //? в функции ниже есть асинхронность, нужно ли перед RenderComponent или infoPageComponent ставить await?
  renderComponent(root, historyPageComponent(payload));
};
