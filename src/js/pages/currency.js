import { renderComponent } from '../helpers';
import { headerButtonsComponent } from '../components';

const header = document.querySelector('.header');

export const currencyPage = () => {
  renderComponent(header, headerButtonsComponent('currency'));
  root.innerHTML = 'CURRENCY';
};
