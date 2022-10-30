import { component, module } from '../../core';
import getAccounts from './api';
import accountsPage from './templates/accountsPage';
import accountSkeleton from './templates/accountSkeletonPage';
import controller from './controller';

import './index.scss';

const page = () => component({ template: accountsPage, controller });

export default module({
  component: page,
  componentSkeleton: accountSkeleton,
  getData: getAccounts,
});
