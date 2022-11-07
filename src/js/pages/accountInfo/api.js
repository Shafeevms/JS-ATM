import { Router } from '../../core';
import { request } from '../../core/api';
import { userAccount } from '../../store';

export const getAccountId = async () => {
  const { id } = Router.query;

  const { payload } = await request({ URL: `account/${id}` });
  userAccount.data = payload;
};

export const transferAmmount = async (data) => request({ method: 'POST', URL: 'transfer-funds', data });
