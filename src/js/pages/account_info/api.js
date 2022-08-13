import { request } from '../../api';

export const getAccountId = async (id) => request({ URL: `account/${id}` });

export const transferAmmount = async (data) => request({ method: 'POST', URL: 'transfer-funds', data });
