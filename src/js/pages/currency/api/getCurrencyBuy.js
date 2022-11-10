import { request } from '../../../core/api';

const currencyBuy = async (data) => request({ method: 'POST', URL: 'currency-buy', data });

const getCurrencyBuy = async ({ from, to, sum }) => {
  const data = await currencyBuy(
    {
      from,
      to,
      amount: sum,
    },
  );
  const { payload: transaction, error } = data;

  if (error) {
    throw new Error(error);
  }
  return transaction;
};

export default getCurrencyBuy;
