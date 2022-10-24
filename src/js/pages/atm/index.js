import { module, component } from '../../core';
import atmPage from './atmPage';
import controller from './controller';
import './index.scss';

const page = () => component({
  template: atmPage,
  controller,
});

export default module({
  component: page,
});
