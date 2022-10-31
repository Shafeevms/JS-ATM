import loginHandler from './listener';

const controller = (html) => {
  const form = html.querySelector('.login__form');

  sessionStorage.removeItem('token');
  form.addEventListener('submit', loginHandler);
};

export default controller;
