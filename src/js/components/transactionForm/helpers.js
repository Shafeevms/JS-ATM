export const showError = (el, error) => {
  const inputs = el.querySelectorAll('input');
  inputs.forEach((input) => input.classList.add('invalid'));
  el.querySelector('.an_form__misstake').innerHTML = error;
};

export const deleteError = (el) => {
  el.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
      el.querySelectorAll('input').forEach((input) => {
        input.classList.remove('invalid');
      });
      el.querySelector('.an_form__misstake').innerHTML = '';
    }
  });
};

export const filterStringInArray = (array, value) => (
  array.filter((el) => el.slice(0, value.length) === value)
);

export const saveAccountToLocalStorage = (account) => {
  if (!account) {
    return;
  }
  const storage = localStorage.getItem('accounts');
  if (storage) {
    const array = JSON.parse(storage);
    if (array.find((el) => el === account)) {
      return;
    }
    localStorage.setItem('accounts', JSON.stringify([...array, account]));
  } else {
    localStorage.setItem('accounts', JSON.stringify([...[], account]));
  }
};
