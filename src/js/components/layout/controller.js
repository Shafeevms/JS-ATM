import { Router } from '../../core';

let interval;

const controller = (html) => {
  const header = html.querySelector('.header__wrapper');

  if (header) {
    const links = header.querySelectorAll('a');

    const { pathname } = Router;

    Array.from(links).forEach((link) => {
      if (link.getAttribute('href') === pathname) {
        link.classList.add('header__btn_pressed');
      } else {
        link.classList.remove('header__btn_pressed');
      }
    });
  }

  if (!interval) {
    const checkLogin = () => {
      const { pathname } = Router;
      const token = sessionStorage.getItem('token');

      if (pathname === '/login') {
        clearInterval(interval);
      } else if (!token) {
        window.location.href = '/login';
      }
    };
    checkLogin();
    interval = setInterval(checkLogin, 1000);
  }
};

export default controller;
