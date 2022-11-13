import { saveAccountToLocalStorage } from '../helpers';

describe('transactionFrom > helpers saveAccountToLocalStorage', () => {
  const account = '74213041477477406320783754';

  it('if no params returns "undefined"', () => {
    expect(saveAccountToLocalStorage()).toBe(undefined);
  });
  it('if account exist in storage', () => {
    const response = JSON.stringify([
      '74213041477477406320783754',
      '232424',
    ]);
    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest.fn().mockImplementation(() => response);

    expect(saveAccountToLocalStorage(account)).toBe(undefined);
  });

  it('if account is not exist in storage', () => {
    const response = [
      '345879345397503958',
      '232424',
    ];
    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest.fn().mockImplementation(() => JSON.stringify(response));

    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    saveAccountToLocalStorage(account);
    expect(Storage.prototype.setItem).toBeCalledWith(
      'accounts',
      JSON.stringify([...response, account]),
    );
  });
  it('if storage is empty', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest.fn().mockImplementation(() => undefined);

    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    saveAccountToLocalStorage(account);
    expect(Storage.prototype.setItem).toBeCalledWith(
      'accounts',
      JSON.stringify([account]),
    );
    expect(Storage.prototype.setItem).toBeCalledTimes(1);
  });
});
