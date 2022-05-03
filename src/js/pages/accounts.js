import { renderComponent } from '../helpers';
import { headerButtonsComponent } from '../components';

const header = document.querySelector('.header');

export const accountsPage = () => {
  renderComponent(header, headerButtonsComponent('accounts'));
  root.innerHTML = 'ACCOUNTS';
};
