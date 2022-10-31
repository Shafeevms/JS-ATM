import { redirect } from '../../router';
import { userAccount } from '../../store';

const controller = (html) => {
  const { account } = userAccount.data;

  const btnBack = html.querySelector('.details__btn');
  btnBack.addEventListener('click', () => redirect(`/accounts?id=${account}`));
};

export default controller;
