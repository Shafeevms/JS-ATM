import { request } from '../../api';

export const getAllCurrencies = async () => request({ URL: 'all-currencies' });
export const getClientCurrencies = async () => request({ URL: 'currencies' });
export const currencyBuy = async (data) => request({ method: 'POST', URL: 'currency-buy', data });

export const openSocket = () => {
  const socket = new WebSocket('ws://localhost:3000/currency-feed');
  socket.onmessage = (ev) => console.log(ev.data);
  socket.onclose = () => console.log('Соедиенние закрыто');
  setTimeout(() => socket.close(), 5000);
};
