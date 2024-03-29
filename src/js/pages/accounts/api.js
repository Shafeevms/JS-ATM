import { request } from '../../core/api';
import { userAccount } from '../../store';

const getAccounts = async () => {
  const { payload } = await request({ URL: 'accounts' });
  userAccount.data = payload;
};

export default getAccounts;
