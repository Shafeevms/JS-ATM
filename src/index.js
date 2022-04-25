import './styles/header.scss';
import './styles/login.scss';
import listener from './js/listeners';

const form = document.querySelector('.login__form');

form.addEventListener('submit', listener.checkLogin(form));

window.addEventListener('popstate', () => {
  console.log(window.location.pathname);
});
