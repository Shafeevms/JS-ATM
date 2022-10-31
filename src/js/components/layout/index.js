import { module, component } from '../../core';
import template from './template';
import controller from './controller';

const layoutComponent = () => component({ template, controller });

export default module({
  component: layoutComponent,
});
