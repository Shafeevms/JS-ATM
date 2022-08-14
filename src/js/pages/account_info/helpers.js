export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const minusAmmountDenied = (el) => {
  el.addEventListener('keydown', (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  });
};

export const saveAccountToLocalStorage = (account) => {
  const arr = JSON.parse(localStorage.getItem('accounts'));
  if (!arr.includes(account)) {
    arr.push(account);
    localStorage.setItem('accounts', JSON.stringify(arr))
  }
};
