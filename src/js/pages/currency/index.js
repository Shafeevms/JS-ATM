import { module, component } from '../../core';
import getCurrencies from './api/getCurrencies';
import currencyPage from './templates/currencyPage';
import CurrencySkeletonPage from './templates/currencySkeletonPage';
import controller from './controller';

import './index.scss';

const page = (data) => component({ template: currencyPage, controller, data });

export default module({
  component: page,
  componentSkeleton: CurrencySkeletonPage,
  getData: getCurrencies,
  parent: true,
});
