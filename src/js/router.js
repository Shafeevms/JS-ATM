/* eslint-disable no-unused-expressions */
import login from './pages/login';
import accountsPage from './pages/accounts';
import ATMPage from './pages/atm';
import currencyPage from './pages/currency';
import historyPage from './pages/accountHistory';
import renderAccountInfo from './pages/accountInfo';
import layout from './components/layout';

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

export const routeSwitcher = async() => {
  const { pathname, search } = window.location;
  const urlParams = new URLSearchParams(search);
  const id = urlParams.get('id');

  // const routesMap = [
  //   { path: '/accounts', module: accountsPage },
  //   { path: '/accounts/:id', module: renderAccountInfo },
  // ];

  if (pathname === '/login') {
    login();
  } else {
    const layoutHtml = await layout();
    const main = layoutHtml.querySelector('#main');

    switch (pathname) {
      case '/':
        redirect('accounts');
        break;
      case '/accounts':
        if (urlParams.get('history') === 'true') {
          historyPage({ id, parent: main });
          break;
        }
        if (id) {
          renderAccountInfo({ id, parent: main });
          break;
        }
        accountsPage({ parent: main });
        break;
      case '/atm':
        ATMPage({ parent: main });
        break;
      case '/currency':
        currencyPage({ parent: main });
        break;
      default:
        break;
    }
  }
};
