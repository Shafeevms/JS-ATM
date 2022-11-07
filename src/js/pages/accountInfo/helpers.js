import { getMonth } from '../../helpers/date';

const dayjs = require('dayjs');

export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function clearFormInputs(...args) {
  args.forEach((el) => el.value = '');
}

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

export const maxRange = (preparedData) => (
  Math.max.apply(null, preparedData.map((el) => el.balance))
);
