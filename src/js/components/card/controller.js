import { Router } from '../../core';

const cardController = (html, data) => {
  const btn = html.querySelector('.card__btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    Router.redirect(`/accounts/${data.account}`);
  });
};

export default cardController;
