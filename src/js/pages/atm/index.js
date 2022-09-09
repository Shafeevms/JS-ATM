import './index.scss';
import { renderComponent } from '../../helpers';
import { headerButtonsComponent } from '../../components';
import atmPageComponent from './component';
import yandexMapScript from './api';

const header = document.querySelector('.header__container');

const ATMPage = () => {
  renderComponent(header, headerButtonsComponent('atm'));
  root.innerHTML = '';
  renderComponent(root, atmPageComponent());
  yandexMapScript();
};

export default ATMPage;
