import { openAccountHandler, sortAccountsHandler } from './listeners';
import getAccounts from '../api';
import { userAccount } from '../../../store';
import { module } from '../../../core';
import cardPage from '../../../components/card';

const accountsController = async (html) => {
  await getAccounts();

  const ul = html.querySelector('.accounts__cardlist');

  html.querySelector('.accounts__select').addEventListener('change', sortAccountsHandler);
  html.querySelector('.accounts__btn').addEventListener('click', openAccountHandler);

  userAccount.data.forEach((card) => ul.append(cardPage(card)));
};

export default accountsController;
