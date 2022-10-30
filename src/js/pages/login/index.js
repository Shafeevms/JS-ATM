import { module, component } from '../../core';
import loginPage from './loginPage';
import controller from './controller';

import './login.scss';

const page = (_, params) => component({ template: loginPage, controller, data: params });

export default module({
  component: page,
});
