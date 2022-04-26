import './styles/header.scss';
import './styles/login.scss';
import listener from './js/listeners';
import changeURLEvent from './js/router';

const form = document.querySelector('.login__form');

form.addEventListener('submit', listener.checkLogin(form));

changeURLEvent();

window.addEventListener('locationchange', function () {
  console.log(window.location.pathname);
});
