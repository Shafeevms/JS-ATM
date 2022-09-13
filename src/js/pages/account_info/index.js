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
  getHistoryBalance(payload);
  userAccount.data = payload;

  //? в функции ниже есть асинхронность, нужно ли перед RenderComponent или infoPageComponent ставить await?
  renderComponent(root, infoPageComponent(payload));
};

export const getHistoryBalance = (payloadBalance, PERIOD = 60) => {
  const { transactions, balance, account } = payloadBalance;
  // const currentYear = dayjs().year();
  // const currentMonth = dayjs().month();
  const periodDates = [];
  const monthSplitedData = {};

  // приготовили список месяцев, которые нужны
  for (let i = 0; i < PERIOD; i++) {
    const date = dayjs().subtract(i, 'month');
    periodDates[i] = date.format('YY/MM');
    monthSplitedData[date.format('YY/MM')] = [];
  }

  // приготовили объект в котором помесячно собраны элементы в массивы
  transactions.forEach((element) => {
    for (let j = 0; j < periodDates.length - 1; j++) {
      if (dayjs(element.date).format('YY/MM') === periodDates[j]) {
        monthSplitedData[periodDates[j]].push(element);
      }
    }
  });
  const amountsInMonths = getAmountsPerMonths(monthSplitedData, account, balance);
  console.log(amountsInMonths);
  // необходимо просчитать в каждом месяце:
  // - наибольший баланс;
  // - сумму положительных транзакций;
  // - сумму отрицательных транзакций;
};

// функция вытаскивает все транзакции за месяц положительные и отрицательные
// складывает отдельно все положительные и отрицательные значения за месяц

//! функция не работает? сделать период 24 мес, обновить data.json
const getAmountsPerMonths = (obj, id, balance) => {
  const newobj = {};
  let prevBalance = balance;
  for (let key in obj) {
    const tempArr = [];
    let pos = 0;
    let neg = 0; // [ {}, {date: 22/07},]
    obj[key].forEach((el) => {
      const sign = (el.to === id) ? 1 : -1;
      tempArr.push(el.amount * sign);
    });
    tempArr.forEach((amount) => {
      amount >= 0
        ? pos += amount
        : neg += amount;
    });
    newobj[key] = { arr: tempArr };
    newobj[key] = { ...newobj[key], pos: +pos.toFixed(2), neg: +neg.toFixed(2) };
    prevBalance = +(prevBalance - pos + -neg).toFixed(2);
    //! вот эта цифра должна попадать в следующий объект!!!
    newobj[key] = { ...newobj[key], prevBalance };
  }
  return newobj;
};

// export const getHistoryBalance = (payloadBalance, PERIOD = 24) => {
//   const chartData = [];
//   const currentYear = dayjs().year();
//   const { transactions, balance, account } = payloadBalance;
//   console.log(transactions)

//   for (let i = 0; i < PERIOD; i++) {
//     const date = dayjs().subtract(i, 'month');

//     chartData[i] = {
//       month: date.month(),
//       year: date.year(),
//       balance: i === 0 ? balance : 0,
//     };
//   }

//   const preparedBalance = transactions
//     /* .filter(payment => {
//       const date = dayjs(payment.date);
//       return chartData.find(item => item.month === date.month())
//              && chartData.find(item => item.year === date.year());
//     }) */
//     .reduceRight((acc, payment) => {
//       const sign = (payment.to === account) ? 1 : -1;
//       const paymentDate = dayjs(payment.date);

//       const paymentYear = paymentDate.year();
//       const currentMonth = paymentDate.month();
//       const prevMonth = paymentDate.subtract(1, 'month').month();

//       const prevIndex = acc.findIndex(
//         item => item.month === prevMonth && item.year === paymentYear,
//       );

//       const currentIndex = acc.findIndex(
//         item => item.month === currentMonth && item.year === paymentYear,
//       );

//       if (acc[prevIndex] && acc[currentIndex]) {
//         acc[prevIndex].balance = +(acc[currentIndex].balance + sign * payment.amount).toFixed(2);
//       }

//       return acc;
//     }, chartData)
//     ;

//   // console.log(preparedBalance);
// };
