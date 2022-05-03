import { renderComponent } from '../helpers';
import { headerButtonsComponent } from '../components';

const header = document.querySelector('.header');

export const ATMPage = () => {
  renderComponent(header, headerButtonsComponent('atm'));
  root.innerHTML = 'ATM';
};
