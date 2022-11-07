// import fetchLogin from './api';

// jest.mock('../../../../__mocks__/loginrequest.js');

// it('Заполняем логин и пароль' () => {
//   expect.assertion(1);
//   return expect(fetchLogin)
// });
import loginModule from '..';

jest.mock('../../../core/router', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('asda', () => {
  beforeAll(() => {
    document.createElement('div').setAttribute('id', 'root');
  });
  const login = loginModule();

  it('asd', () => {
    console.log(login);
    expect(1).toBe(2);
  });
});
