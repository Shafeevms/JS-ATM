import { renderComponent } from '../helpers';
import { headerButtonsComponent } from '../components';

const header = document.querySelector('.header__container');

export const currencyPage = () => {
  renderComponent(header, headerButtonsComponent('currency'));
  root.innerHTML = 'CURRENCY';
};
