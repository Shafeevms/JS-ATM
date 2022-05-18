import './login.scss';
import { loginComponent } from '../../components';
import { renderComponent } from '../../helpers';
import listener from '../../listeners';
import { redirect } from '../../router';

const root = document.querySelector('#root');

export const loginPage = (error) => {
  root.innerHTML = '';
  renderComponent(root, loginComponent(error));
  const form = document.querySelector('.login__form');
  form.addEventListener('submit', listener.checkLogin);
};

export const loginResponse = (obj) => {
  const { payload, error } = obj;
  if (payload) {
    sessionStorage.setItem('token', payload.token);
    redirect('accounts');
  } else loginPage(error);
};
