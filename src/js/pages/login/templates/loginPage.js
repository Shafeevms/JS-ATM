const loginPage = ({ error } = {}) => `
<div class="login">
  <form class="login__form">
    <h2 class="login__title title">Вход в аккаунт</h2>
    <h3 class="${error ? '' : 'visually-hidden'} login__alert">${error || 'введите корректный логин и пароль'}</h3>
    <input type="text" name="login" class="login__input ${error === 'No such user' ? 'invalid' : 'valid'}" id="login" placeholder="Введите логин">
    <input type="password" name="password" class="login__input ${error === 'Invalid password' ? 'invalid' : 'valid'}" id="password" placeholder="Введите пароль">
    <button type="submit" class="login__btn btn">Войти</button>
  </form>
 </div>`;

export default loginPage;
