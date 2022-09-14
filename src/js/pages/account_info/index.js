/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import * as dayjs from 'dayjs';
import { renderComponent } from '../../helpers';
import './index.scss';
import infoPageComponent from './components';
import { userAccount } from '../../store';
import { getAccountId } from './api';

export const renderAccountInfo = async (id) => {
  root.innerHTML = '';
  const { payload } = await getAccountId(id);
  console.log(getHistoryBalance(payload));
  userAccount.data = payload;

  //? в функции ниже есть асинхронность, нужно ли перед RenderComponent или infoPageComponent ставить await?
  renderComponent(root, infoPageComponent(payload));
};

export const getHistoryBalance = (payloadBalance, PERIOD = 60) => {
  const { transactions, balance, account } = payloadBalance;
  const monthSplitedData = [];

  // приготовили объект в котором помесячно собраны элементы в массивы
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
    };
  }
  return preparedMonthData;
};
