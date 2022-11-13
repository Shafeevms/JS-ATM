import { numberWithSpaces } from '../helpers';

describe('accountInfo > helpers numberWithSpaces', () => {
  it('returns string "1 000"', () => {
    expect(numberWithSpaces(1000)).toBe('1 000');
  });

  it('returns string "1 000 000"', () => {
    expect(numberWithSpaces(1000000)).toBe('1 000 000');
  });
});
