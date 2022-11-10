const dayjs = require('dayjs');
import 'dayjs/locale/ru';
dayjs.locale('ru');

import './styles/header.scss';
import { Router } from './js/core';
import { routesMap } from './js/router';
import layoutComponent from './js/components/layout';

Router.init();

(async() => {
  const layout = await layoutComponent();
  const main = layout.querySelector('#main');

  Router.create(routesMap, main);
})()

