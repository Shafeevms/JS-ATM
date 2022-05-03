/* eslint-disable no-unused-expressions */
import { loginPage } from './pages/login';
import { checkToken } from './helpers';
import { accountsPage } from './pages/accounts';
import { ATMPage } from './pages/atm';
import { currencyPage } from './pages/currency';

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
      checkToken()
        ? redirect('accounts')
        : redirect('login');
      break;
    case '/login':
      loginPage();
      break;
    case '/accounts':
      checkToken()
        ? accountsPage()
        : redirect('login');
      break;
    case '/atm':
      checkToken()
        ? ATMPage()
        : redirect('login');
      break;
    case '/currency':
      checkToken()
        ? currencyPage()
        : redirect('login');
      break;

    default:
      break;
  }
};

export const redirect = (path) => window.history.pushState(null, '', path);
