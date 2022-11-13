import { getMonth } from '../date';

describe('helpers > date.js getMonth', () => {
  const innerDate = '21/12';
  it('returns "дек"', () => {
    expect(getMonth(innerDate)).toEqual('дек');
  });
});
