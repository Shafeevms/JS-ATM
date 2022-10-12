import './index.scss';
import { headerButtonsEnable, renderComponent } from '../../helpers';
import { headerButtonsComponent } from '../../components';
import atmPageComponent from './component';
import yandexMapScript from './api';

const header = document.querySelector('.header__container');

const ATMPage = () => {
  headerButtonsEnable('atm');
  root.innerHTML = '';
  renderComponent(root, atmPageComponent());
  yandexMapScript();
};

export default ATMPage;
