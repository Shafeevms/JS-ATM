export const login = () => {
  const div = document.createElement('div');
  div.classList.add('login');
  div.innerHTML = `
  <form class="login__form">
    <h2 class="login__title">Вход в аккаунт</h2>
    <input type="text" name="login" class="login__input" id="login" placeholder="Введите логин" value="developer">
    <input type="password" name="password" class="login__input" id="password" placeholder="Введите пароль" value="skillbox">
    <button type="submit" class="login__btn btn">Войти</button>
  </form>`;
  return div;
};

export const fd = () => {};
