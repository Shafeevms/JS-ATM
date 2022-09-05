import { binarySearch } from '../../helpers';

export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const minusAmmountDenied = (el) => {
  el.addEventListener('keydown', (e) => {
    if (e.code === 'Minus' || e.code === 'ArrowDown') {
      e.preventDefault();
    }
  });
};

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

export const showError = (el, error) => {
  const inputs = el.querySelectorAll('input');
  inputs.forEach((input) => input.classList.add('invalid'));
  el.querySelector('.an_form__misstake').innerHTML = error;
};

export const deleteError = (el) => {
  el.addEventListener('click', (e) => {
    if (e.target === el.querySelector('input')) {
      el.querySelectorAll('input').forEach((input) => input.classList.remove('invalid'));
      el.querySelector('.an_form__misstake').innerHTML = '';
    }
  });
};

export function clearFormInputs(...args) {
  args.forEach(el => el.value = '');
}

export const filterStringInArray = (array, value) => (
  array.filter((el) => el.slice(0, value.length) === value)
);


