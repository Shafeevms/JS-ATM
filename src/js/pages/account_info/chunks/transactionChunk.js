const transactionChunk = (obj, currentAccount) => {
  const {
    amount,
    date,
    from,
    to,
  } = obj;
  return `
  <ul class="an-table__body-line">
    <li class="an-table__body-item">${from}</li>
    <li class="an-table__body-item">${to}</li>
    <li class="an-table__body-item an-table__summ ${from !== currentAccount ? 'an-table__summ_positive' : 'an-table__summ_negative'}">
      ${numberWithSpaces(amount)}
    </li>
    <li class="an-table__body-item">${ISODateToText(date)}</li>
  </ul>`;
};

export default transactionChunk;
