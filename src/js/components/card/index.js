import { component } from '../../core';
import cardComponent from './template';
import cardController from './controller';

const cardPage = (params) => component({
  template: cardComponent,
  controller: cardController,
  data: params,
  tag: 'li',
});

export default cardPage;
