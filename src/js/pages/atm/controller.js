import { headerButtonsEnable } from '../../helpers';
import yandexMapScript from './api';

const controller = () => {
  headerButtonsEnable('atm');
  yandexMapScript();
};

export default controller;
