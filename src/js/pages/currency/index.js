import './index.scss';
import { headerButtonsEnable, renderComponent } from '../../helpers';
import { currencyPageComponent, currencySkeletonPage } from './components';
import { getAllCurrencies, getClientCurrencies } from './api';

const header = document.querySelector('.header__container');

export const currencyPage = async () => {
  headerButtonsEnable('currency');
  root.innerHTML = '';
  renderComponent(root, currencySkeletonPage());

  const [{ payload: allCurrencies }, { payload: clientCurrencies }] = await Promise.all([
    getAllCurrencies(),
    getClientCurrencies(),
  ]);
  root.innerHTML = '';
  renderComponent(root, currencyPageComponent({ allCurrencies, clientCurrencies }));
};

export default currencyPage;
