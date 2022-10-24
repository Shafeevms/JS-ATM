const clientCurrencyChunk = (obj) => (
  Object
    .values(obj)
    .reduce((acc, el) => {
      const { code, amount } = el;
      return acc += `
        <li class="your-currency__line currency-line">
          <div class="currency-line__name">${code}</div>
          <div class="currency-line__dots"></div>
          <div class="currency-line__num">${amount.toFixed(2)}</div>
        </li>`;
    }, '')
);

export default clientCurrencyChunk;
