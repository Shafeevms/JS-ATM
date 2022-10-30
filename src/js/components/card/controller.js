import { redirect } from '../../router';

const cardController = (html, data) => {
  const btn = html.querySelector('.card__btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    redirect(`/accounts?id=${data.account}`);
  });
};

export default cardController;
