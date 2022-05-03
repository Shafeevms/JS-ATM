export const loginComponent = (err) => {
  const div = document.createElement('div');
  div.classList.add('login');
  div.innerHTML = `
  <form class="login__form">
    <h2 class="login__title">Вход в аккаунт</h2>
    <h3 class="${err ? '' : 'visually-hidden'} login__alert">${err ? err : 'введите корректный логин и пароль' }</h3>
    <input type="text" name="login" class="login__input ${err === 'No such user' ? 'invalid' : 'valid'}" id="login" placeholder="Введите логин">
    <input type="password" name="password" class="login__input ${err === 'Invalid password' ? 'invalid' : 'valid'}" id="password" placeholder="Введите пароль">
    <button type="submit" class="login__btn btn">Войти</button>
  </form>`;
  return div;
};

export const fd = () => {};
