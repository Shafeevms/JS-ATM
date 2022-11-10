import MockDate from 'mockdate';
import { getHistoryBalance } from '../helpers';
import accountMock from './account.mock';

MockDate.set('2021-05-12');

describe('getHistoryBalance', () => {
  const result = getHistoryBalance(accountMock.payload);

  it('Should return 7 elements', () => {
    expect(result.length).toBe(7);
  });

  it('should return correct zero element', () => {
    expect(result[0]).toEqual({ balance: 1894.47, prevMonth: 'май' });
  });
  it('3rd element should be equel expected object', () => {
    const expected = {
      prevBalance: 1894.47,
      balance: 1894.47,
      transactions: [],
      pos: 0,
      neg: 0,
      date: '21/03',
      month: 'мар',
      prevMonth: 'фев',
    };
    expect(result[3]).toEqual(expected);
  });
});
