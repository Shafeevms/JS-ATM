import { maxRange } from '../helpers';

describe('accountInfo > helpers maxRange', () => {
  const array = [
    {
      balance: 23,
    },
    {
      balance: 14,
    },
    {
      balance: 45,
    },
  ];

  it('returns max num from array', () => {
    expect(maxRange(array)).toBe(45);
  });
});
