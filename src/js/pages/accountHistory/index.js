import { component, module } from '../../core';

import { getAccountId } from '../accountInfo/api';
import controller from './controller';
import historyPage from './templates/historyPage';
import historySkeletonPage from './templates/historySkeletonPage';

import '../accountInfo/index.scss';

const page = () => component({ template: historyPage, controller });

export default module({
  component: page,
  componentSkeleton: historySkeletonPage,
  getData: getAccountId,
});
