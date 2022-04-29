export const isLoginValid = (obj) => {
  return Object
  .values(obj)
  .map(value => value.length >= 6 && !/\s/.test(value))
};

export const addValidationClasses = (arr, form) => {
  const input = form.querySelectorAll('.login__input');
  const loginAlert = form.querySelector('.login__alert');
  input.forEach(el => el.className = 'login__input');
  loginAlert.classList.add('visually-hidden');
  arr.forEach((element, index) => {
    if (element) {
      input[index].classList.add('valid');
    } else {
      input[index].classList.add('invalid');
      loginAlert.classList.remove('visually-hidden');
      loginAlert.innerText = 'введите корректный логин и пароль';
    }
  });
};
