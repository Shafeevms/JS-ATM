import loginHandler from './listener';

const header = document.querySelector('.header__container');

const removeHeaderButtons = () => {
  if (header.lastElementChild === document.querySelector('.header__wrapper')) {
    header.lastElementChild.remove();
  }
};

const controller = (html) => {
  const form = html.querySelector('.login__form');

  sessionStorage.removeItem('token');
  removeHeaderButtons();
  form.addEventListener('submit', loginHandler);
};

export default controller;
