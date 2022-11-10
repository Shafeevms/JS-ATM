import template from '../template';
import { createHtml } from '../../../../../jest/helpers';

describe('Components > Card template', () => {
  const obj = {
    account: '74213041',
    balance: 2137,
    transactions: [{ date: '2022-11-09T17:44:00.826Z' }],
  };
  const html = template(obj);
  const component = createHtml(html);

  it('Should return correct card account', () => {
    const account = component.querySelector('.card__account');
    expect(account.textContent).toBe('74213041');
  });

  it('Should return correctly date', () => {
    const date = component.querySelector('.card__date');
    expect(date.textContent).toBe('9 ноября 2022');
  });
});
