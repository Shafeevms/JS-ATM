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

export const getHistoryBalance = (payloadBalance, PERIOD = 24) => {
  const chartData = [];
  const currentYear = dayjs().year();
  const { transactions, balance, account } = payloadBalance;

  for (let i = 0; i < PERIOD; i++) {
    const date = dayjs().subtract(i, 'month');

    chartData[i] = {
      month: date.month(),
      year: date.year(),
      balance: i === 0 ? balance : 0,
    };
  }

  const preparedBalance = transactions
    /* .filter(payment => {
      const date = dayjs(payment.date);
      return chartData.find(item => item.month === date.month())
             && chartData.find(item => item.year === date.year());
    }) */
    .reduceRight((acc, payment) => {
      const sign = (payment.to === account) ? 1 : -1;
      const paymentDate = dayjs(payment.date);

      const paymentYear = paymentDate.year();
      const currentMonth = paymentDate.month();
      const prevMonth = paymentDate.subtract(1, 'month').month();

      const prevIndex = acc.findIndex(
        item => item.month === prevMonth && item.year === paymentYear,
      );

      const currentIndex = acc.findIndex(
        item => item.month === currentMonth && item.year === paymentYear,
      );

      if (acc[prevIndex] && acc[currentIndex]) {
        acc[prevIndex].balance = +(acc[currentIndex].balance + sign * payment.amount).toFixed(2);
      }

      return acc;
    }, chartData)
    ;

  console.log(preparedBalance);
};
