import './styles/header.scss';
import './styles/login.scss';
import './styles/accounts.scss';
import { createURLChangeEvent, routeSwitcher } from './js/router';

createURLChangeEvent();
window.addEventListener('locationchange', routeSwitcher);
routeSwitcher();
