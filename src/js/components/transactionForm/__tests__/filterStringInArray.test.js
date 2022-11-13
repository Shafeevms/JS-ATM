import { filterStringInArray } from '../helpers';

describe('transactionform > helpers > filterStringInArray', () => {
  const array = ['133', '32', '433', '6333', '6336'];

  it('returns 2 elements', () => {
    const result = filterStringInArray(array, '63');
    expect(result.length).toBe(2);
  });

  it('returns 1 element', () => {
    const result = filterStringInArray(array, '33');
    expect(result.length).toBe(0);
  });

  it('returns no element', () => {
    const result = filterStringInArray(array, '3');
    expect(result.length).toBe(1);
  });
});
