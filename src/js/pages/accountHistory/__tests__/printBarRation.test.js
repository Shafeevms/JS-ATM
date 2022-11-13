import printBarRatio, { maxRatioRange } from '../templates/printBarRatio';
import { preparedData } from './history.mock';
import { createHtml } from '../../../../../jest/helpers';

describe('accountHisoty > templates > printBarRatio maxRatioRange', () => {
  it('find maximum range in array with data in object', () => {
    expect(maxRatioRange(preparedData)).toBe('1000000.00');
  });
});

describe('accountHisoty > templates > printBarRatio', () => {
  it('return html with correct data', () => {
    const html = printBarRatio(preparedData);
    const component = createHtml(html);
    expect(component.querySelector('.an_ratio__empty-bar').dataset.month).toBe('22/11');
    expect(component.querySelector('.an_ratio__neg').style.height).toBe('0%');
  });
});
