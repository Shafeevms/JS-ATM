import { getHistoryBalance } from '../helpers';
import accountMock from './account.mock';
// const dayjs = require('dayjs');

describe('getHistoryBalance', () => {
  it('Should return correct balance data', () => {
    const expectedBalanceData = {
      balance: 1984,
    }

    const result = getHistoryBalance(accountMock.payload);

    const anotherImplementation = getLastMonthTransactions(accountMock.payload, 10);
    console.log(result);
  });
});
