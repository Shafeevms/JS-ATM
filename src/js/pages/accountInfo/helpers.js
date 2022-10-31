import { getMonth } from '../../helpers/date';

const dayjs = require('dayjs');

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
    const prevMonth = dayjs(date).subtract(1, 'month').format('YY/MM');
    monthSplitedData[j] = { date: date.format('YY/MM'), prevMonth, transactions: [] };
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
  for (let i = 0; i < monthData.length; i++) {
    preparedMonthData[i] = { prevBalance };
    const tempArr = [];
    let pos = 0;
    let neg = 0;
    monthData[i].transactions.forEach((transaction) => {
      const sign = (transaction.to === id) ? 1 : -1;
      tempArr.push(transaction.amount * sign);
    });
    tempArr.forEach((amount) => {
      if (amount >= 0) {
        pos += amount;
      } else {
        neg += amount;
      }
    });
    prevBalance = +(prevBalance - pos + -neg).toFixed(2);
    preparedMonthData[i] = {
      ...preparedMonthData[i],
      balance: prevBalance,
      transactions: tempArr,
      pos: +pos.toFixed(2),
      neg: +neg.toFixed(2),
      date: monthData[i].date,
      month: getMonth(monthData[i].date),
      prevMonth: getMonth(monthData[i].prevMonth),
    };
  }

  return [{ balance, prevMonth: getMonth(dayjs().format('YY/MM')) }, ...preparedMonthData];
};

export const monthReducer = (preparedData, cut = 0) => preparedData.reduceRight((acc, el, index) => {
  if (index !== preparedData.length - cut) {
    acc += `<li class="an_graphs__month">${el.prevMonth}</li>`;
  }
  return acc;
}, '');

export const maxRange = (preparedData) => (
  Math.max.apply(null, preparedData.map((el) => el.balance))
);

const maxRatioRange = (preparedData) => {
  const temp = preparedData.map((el) => {
    if (el.pos || el.neg) {
      return el.pos - el.neg;
    }
    return 0;
  });
  return (Math.max.apply(null, temp)).toFixed(2);
};

export const barReducer = (preparedData) => {
  const max = maxRange(preparedData);
  return preparedData.reduceRight((acc, el) => {
    acc += `<li class="an_graphs__bar" style="height: ${Math.floor((el.balance / max) * 100)}%"></li>`;
    return acc;
  }, '');
};

export const barRatioReducer = (preparedData) => {
  const max = maxRatioRange(preparedData);
  return preparedData.reduceRight((acc, el, index) => {
    if (index > 0) {
      const height = +(((el.pos - el.neg) / max) * 100).toFixed(0) || 0;
      const pos = +((el.pos / max) * 100).toFixed(0) || 0;
      const neg = height - pos;
      acc += `<li class="an_ratio__empty-bar" style="height: ${height}%" data-month=${el.date}>
        <ul class="an_ratio__col">
          <li class="an_ratio__pos" style="height: ${pos}%"></li>
          <li class="an_ratio__neg" style="height: ${neg}%"></li>
        </ul>
      </li>`;
    }
    return acc;
  }, '');
};
