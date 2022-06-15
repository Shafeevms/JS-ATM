import { request } from '../../api';

const getAccounts = async () => request({ URL: 'accounts' });

export default getAccounts;
