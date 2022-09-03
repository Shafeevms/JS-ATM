import './index.scss';
import { renderComponent } from '../../helpers';
import { headerButtonsComponent } from '../../components';
import currencyPageComponent from './components';
import { getAllCurrencies, getClientCurrencies, currencyBuy } from './api';

const header = document.querySelector('.header__container');

export const currencyPage = async () => {
  renderComponent(header, headerButtonsComponent('currency'));
  Promise
    .all([getAllCurrencies(), getClientCurrencies()])
    .then((res) => renderComponent(root, currencyPageComponent(res)));
};

export const foo = () => {};
