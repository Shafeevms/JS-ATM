import { maxRange } from '../helpers';

const printBars = (preparedData) => {
  const max = maxRange(preparedData);
  return preparedData.reduceRight((acc, el) => {
    acc += `<li class="an_graphs__bar" style="height: ${Math.floor((el.balance / max) * 100)}%"></li>`;
    return acc;
  }, '');
};

export default printBars;
