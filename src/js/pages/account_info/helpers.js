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

export const showError = (el) => {
  console.log(el)
  const inputs = el.querySelectorAll('input');
  console.log(inputs);
}

//! не испульзуется
export function clearFormInputs(...args) {
  args.forEach(el => el.value = '');
}
