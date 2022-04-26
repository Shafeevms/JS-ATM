import loginPage from './login';

export const createURLChangeEvent = () => {
  const pushState = history.pushState;
  const replaceState = history.replaceState;

  history.pushState = function () {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  history.replaceState = function () {
    replaceState.apply(history, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'))
  });
};

export const routeSwitcher = () => {
  const path = window.location.pathname;
  switch (path) {
    case '/':
      sessionStorage.getItem('token')
        ? console.log('main page')
        : redirect('login');
      break;
    case '/login':
      console.log('login page');
      loginPage();
      break;

    default:
      break;
  }
};

const redirect = (path) => window.history.pushState(null, '', path);
