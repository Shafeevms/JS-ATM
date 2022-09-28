import * as dayjs from 'dayjs';

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

export const getHistoryBalance = (payloadBalance, PERIOD = 6) => {
  const { transactions, balance, account } = payloadBalance;
  const monthSplitedData = [];

  for (let j = 0; j < PERIOD; j++) {
    const date = dayjs().subtract(j, 'month');
    monthSplitedData[j] = { date: date.format('YY/MM'), transactions: [] };
    transactions.forEach((transaction) => {
      if (dayjs(transaction.date).format('YY/MM') === monthSplitedData[j].date) {
        monthSplitedData[j].transactions.push(transaction);
      }
    });
  }
  return getAmountsPerMonths(monthSplitedData, account, balance);
};

const getAmountsPerMonths = (monthData, id, balance) => {
  const preparedMonthData = [];
  let prevBalance = balance;
  for (let i = monthData.length; i--;) {
    preparedMonthData[i] = { prevBalance };
    const tempArr = [];
    let pos = 0;
    let neg = 0;
    monthData[i].transactions.forEach((transaction) => {
      const sign = (transaction.to === id) ? 1 : -1;
      tempArr.push(transaction.amount * sign);
    });
    tempArr.forEach((amount) => {
      amount >= 0
        ? pos += amount
        : neg += amount;
    });
    prevBalance = +(prevBalance - pos + -neg).toFixed(2);
    preparedMonthData[i] = {
      ...preparedMonthData[i],
      transactions: tempArr,
      pos: +pos.toFixed(2),
      neg: +neg.toFixed(2),
      date: monthData[i].date,
      month: getMonth(monthData[i].date),
    };
  }
  return preparedMonthData;
};

const getMonth = (str) => {
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return months[str.split('/')[1] - 1];
};

export const monthReducer = (preparedData) => preparedData.reduceRight((acc, el) => {
  return acc += `<li class="an_graphs__month">${el.month}</li>`;
}, '');

export const maxRange = (preparedData) => Math.max.apply(null, preparedData.map(el => el.prevBalance));

export const barReducer = (preparedData) => {
  const max = maxRange(preparedData);
  return preparedData.reduceRight((acc, el) => {
    return acc += `<li class="an_graphs__bar" style="height: ${Math.floor(el.prevBalance / max * 100)}%"></li>`;
  }, '');
};
