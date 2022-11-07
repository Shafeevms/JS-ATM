import { Router } from '../../core';

import { userAccount } from '../../store';
import transactionForm from '../../components/transactionForm';

const controller = (html) => {
  const { account } = userAccount.data;
  const btnBack = html.querySelector('.details__btn');
  const chart = html.querySelector('.an_graphs');
  const section = html.querySelector('.details__analytics');

  section.prepend(transactionForm());

  btnBack.addEventListener('click', () => Router.redirect('/accounts'));
  chart.addEventListener('click', () => Router.redirect(`/accounts/${account}/history`));
};

export default controller;
