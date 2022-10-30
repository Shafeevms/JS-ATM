import { request } from '../../api';
import { userAccount } from '../../store';

export const getAccountId = async (id) => {
  const { payload } = await request({ URL: `account/${id}` });
  userAccount.data = payload;
};

export const transferAmmount = async (data) => request({ method: 'POST', URL: 'transfer-funds', data });
