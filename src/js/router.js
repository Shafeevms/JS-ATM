import login from './pages/login';
import accountsPage from './pages/accounts';
import ATMPage from './pages/atm';
import currencyPage from './pages/currency';
import historyPage from './pages/accountHistory';
import renderAccountInfo from './pages/accountInfo';

export const routesMap = [
    { path: '/', redirect: '/accounts' },
    { path: '/login', module: login },
    { path: '/accounts', module: accountsPage },
    { path: '/accounts/:id', module: renderAccountInfo },
    { path: '/accounts/:id/history', module: historyPage },
    { path: '/atm', module: ATMPage },
    { path: '/currency', module: currencyPage },
  ];
