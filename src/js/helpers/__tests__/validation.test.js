import { isLoginValid } from '../validation';

describe('helpers > validation isLoginvalid', () => {
  it('more then 6 letters and no spaces in', () => {
    expect(isLoginValid({ first: '123456', second: '1232453' })).toEqual([true, true]);
  });

  it('less then 6 letters and there is space in', () => {
    expect(isLoginValid({ first: '12345', second: '123 2453' })).toEqual([false, false]);
  });
});
