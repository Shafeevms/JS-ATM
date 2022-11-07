import { module, component } from '../../core';
import template from './template';
import controller from './controller';

const withButtons = window.location.pathname !== '/login';

const layoutComponent = () => component({ template, controller, data: { withButtons } });

export default module({
  component: layoutComponent,
});
