import { request } from '../../../api';

const currencyBuy = async (data) => request({ method: 'POST', URL: 'currency-buy', data });

const getCurrencyBuy = async ({ from, to, sum }) => {
  const { payload: transaction, error } = await currencyBuy(
    {
      from,
      to,
      amount: sum,
    },
  );

  if (error) {
    throw new Error(error);
  }
  return transaction;
};

export default getCurrencyBuy;
