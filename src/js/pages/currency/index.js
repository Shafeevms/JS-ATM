import './index.scss';
import { renderComponent } from '../../helpers';
import { headerButtonsComponent } from '../../components';
import currencyPageComponent from './components';
import { getAllCurrencies, getClientCurrencies } from './api';

const header = document.querySelector('.header__container');

export const currencyPage = async () => {
  renderComponent(header, headerButtonsComponent('currency'));

  const [{ payload: allCurrencies }, { payload: clientCurrencies }] = await Promise.all([
    getAllCurrencies(),
    getClientCurrencies(),
  ]);
  renderComponent(root, currencyPageComponent({ allCurrencies, clientCurrencies }));
};

export default currencyPage;
