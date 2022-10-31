const controller = (html) => {
  const header = html.querySelector('.header__wrapper');
  const links = header.querySelectorAll('a');

  const { pathname } = window.location;

  Array.from(links).forEach(link => {
    if (link.getAttribute('href') === pathname) {
      link.classList.add('header__btn_pressed');
    } else {
      link.classList.remove('header__btn_pressed');
    }
  });
};

export default controller;
