import { createHtml } from '../../../../../jest/helpers';
import loginPage from '../templates/loginPage';

describe('login > loginPage', () => {
  const createComponent = (error) => createHtml(loginPage({ error }));
  it('error "No such user"', () => {
    const pageErr = createComponent('No such user');
    expect(pageErr.querySelector('.login__alert').textContent).toBe('No such user');
    expect(pageErr.querySelector('.login__input').classList.contains('invalid')).toBe(true);
    expect(pageErr.querySelector('.login__input').classList.contains('valid')).toBe(false);
  });

  it('any error', () => {
    const pageErr = createComponent('any error');
    expect(pageErr.querySelector('.login__alert').textContent).toBe('any error');
    expect(pageErr.querySelector('.login__input').classList.contains('valid')).toBe(true);
    expect(pageErr.querySelector('.login__input').classList.contains('invalid')).toBe(false);
  });

  it('no error', () => {
    const pageErr = createComponent('');
    expect(pageErr.querySelector('.login__alert').textContent).toBe('введите корректный логин и пароль');
    expect(pageErr.querySelector('.login__input').classList.contains('valid')).toBe(true);
    expect(pageErr.querySelector('.login__input').classList.contains('invalid')).toBe(false);
  });
});
