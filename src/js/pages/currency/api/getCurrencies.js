import { request } from '../../../api';

const getAllCurrencies = async () => request({ URL: 'all-currencies' });
const getClientCurrencies = async () => request({ URL: 'currencies' });

const getCurrencies = async () => {
  const [{ payload: allCurrencies }, { payload: clientCurrencies }] = await Promise.all([
    getAllCurrencies(),
    getClientCurrencies(),
  ]);

  return { allCurrencies, clientCurrencies };
};

export default getCurrencies;
