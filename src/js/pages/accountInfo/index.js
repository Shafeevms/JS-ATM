import { component, module } from '../../core';

import { getAccountId } from './api';
import controller from './controller';
import accountInfoPage from './templates/accountsInfoPage';
import accountsInfoSkeleton from './templates/accountsInfoSkeleton';

import './index.scss';

const page = (_, params) => component({ template: accountInfoPage, controller, data: params });

export default module({
  component: page,
  componentSkeleton: accountsInfoSkeleton,
  getData: getAccountId,
});
