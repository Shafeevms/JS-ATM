/* eslint-disable no-unused-expressions */
import { loginPage } from './pages/login';
import accountsPage from './pages/accounts';
import ATMPage from './pages/atm';
import currencyPage from './pages/currency';
import { historyPage } from './pages/account_info/historyPage';
import renderAccountInfo from './pages/account_info';

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
  const id = urlParams.get('id');

  // const routesMap = [
  //   { path: '/accounts', module: accountsPage },
  //   { path: '/accounts/:id', module: renderAccountInfo },
  // ];

  switch (pathname) {
    case '/':
      redirect('accounts');
      break;
    case '/login':
      loginPage();
      break;
    case '/accounts':
      if (urlParams.get('history') === 'true') {
        historyPage(id);
        break;
      }
      if (id) {
        renderAccountInfo(id);
        break;
      }
      accountsPage();
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
