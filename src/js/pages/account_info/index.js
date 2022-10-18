import './index.scss';
import { renderComponent } from '../../helpers';
import { infoPageComponent, accountSkeletonPage } from './components';
import { userAccount } from '../../store';
import { getAccountId } from './api';

export const renderAccountInfo = async (id) => {
  root.innerHTML = '';
  renderComponent(root, accountSkeletonPage())
  const { payload } = await getAccountId(id);
  userAccount.data = payload;

  root.innerHTML = '';
  //? в функции ниже есть асинхронность, нужно ли перед RenderComponent или infoPageComponent ставить await?
  renderComponent(root, infoPageComponent(payload));
};
