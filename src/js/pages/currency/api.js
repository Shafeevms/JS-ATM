import { request } from '../../api';
import { makeRealTimeLines } from './components';

export const getAllCurrencies = async () => request({ URL: 'all-currencies' });
export const getClientCurrencies = async () => request({ URL: 'currencies' });
export const currencyBuy = async (data) => request({ method: 'POST', URL: 'currency-buy', data });

export const openSocket = (list) => {
  // debugger
  const socket = new WebSocket('ws://localhost:3000/currency-feed');
  socket.onmessage = (ev) => {
    list.appendChild(makeRealTimeLines(ev.data));
    if (list.childNodes.length > 14) {
      list.removeChild(list.getElementsByTagName('li')[0]);
    }
  };
  // socket.onclose = () => console.log('Соединение закрыто');
  // setTimeout(() => socket.close(), 20000);
};
