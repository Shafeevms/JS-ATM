/* eslint-disable no-unused-expressions */
import { loginPage } from './pages/login';
import { accountsPage } from './pages/accounts';
import { ATMPage } from './pages/atm';
import { currencyPage } from './pages/currency';

export const redirect = (path) => window.history.pushState(null, '', path);

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
  const { pathname, search } = window.location;
  const urlParams = new URLSearchParams(search);

  switch (pathname) {
    case '/':
      redirect('accounts');
      break;
    case '/login':
      loginPage();
      break;
    case '/accounts':
      accountsPage(urlParams.get('id'));
      break;
    case '/atm':
      ATMPage();
      break;
    case '/currency':
      currencyPage();
      break;
    default:
      break;
  }
};
