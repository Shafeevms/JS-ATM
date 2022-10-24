const currencyFeedSocket = (onmessage) => {
  const socket = new WebSocket('ws://localhost:3000/currency-feed');

  socket.onmessage = (ev) => {
    const message = ev.data;
    const data = JSON.parse(message);

    onmessage(data);
  };
};

export default currencyFeedSocket;
