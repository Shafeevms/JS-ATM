import template from '../template';
import { createHtml } from '../../../../../jest/helpers';

describe('layout > template', () => {
  const createComponent = (withButtons) => {
    const html = template({ withButtons });
    return createHtml(html);
  };

  it('should return 4 buttons', () => {
    const component = createComponent(true);
    const buttons = component.querySelectorAll('.header__btn');
    expect(buttons.length).toBe(4);
  });

  it('should not return buttons', () => {
    const component = createComponent(false);
    const buttons = component.querySelectorAll('.header__btn');
    expect(buttons.length).toBe(0);
  });
});
