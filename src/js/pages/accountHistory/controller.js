import { Router } from '../../core';
import { userAccount } from '../../store';

const controller = (html) => {
  const { account } = userAccount.data;

  const btnBack = html.querySelector('.details__btn');
  btnBack.addEventListener('click', () => Router.redirect(`/accounts/${account}`));
};

export default controller;
