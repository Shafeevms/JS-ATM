import { renderCards } from './index';
import { createAccount } from '../../api';

export const openNewAccount = async () => {
  await createAccount();
  renderCards();
};

export const sortAccounts = (e) => {
  console.log('сортировка счетов, ', e.target.value);
};
