import './login.scss';
import loginComponent from './component';
import { renderComponent } from '../../helpers';
import checkLogin from './listener';
import { redirect } from '../../router';

const root = document.querySelector('#root');
const header = document.querySelector('.header__container');

const removeHeaderButtons = () => {
  if (header.lastElementChild === document.querySelector('.header__wrapper')) {
    header.lastElementChild.remove();
  }
};

export const loginPage = (error) => {
  removeHeaderButtons();
  root.innerHTML = '';
  renderComponent(root, loginComponent(error));
  const form = document.querySelector('.login__form');
  form.addEventListener('submit', checkLogin);
};

export const loginResponse = (obj) => {
  const { payload, error } = obj;
  if (payload) {
    sessionStorage.setItem('token', payload.token);
    redirect('accounts');
  } else loginPage(error);
};
