import { loginComponent } from './components';
import { renderComponent } from './helpers';
import listener from './listeners';

const loginPage = () => {
  const root = document.querySelector('#root');
  root.innerHTML = '';
  renderComponent(root, loginComponent());
  const form = document.querySelector('.login__form');
  form.addEventListener('submit', listener.checkLogin(form));
};

export default loginPage;


// {payload: null, error: 'No such user'}

// {error: ""
// payload:
// token: "ZGV2ZWxvcGVyOnNraWxsYm94"}

// {payload: null, error: 'Invalid route'}
