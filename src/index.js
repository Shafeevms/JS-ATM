import './styles/header.scss';
import { createURLChangeEvent, routeSwitcher, redirect } from './js/router';
import { checkToken } from './js/helpers';

setInterval(() => {
  const { pathname } = window.location;

  if (!checkToken() && pathname !== '/login') {
    redirect('login');
  }
}, 1000);

createURLChangeEvent();
window.addEventListener('locationchange', routeSwitcher);
routeSwitcher();
