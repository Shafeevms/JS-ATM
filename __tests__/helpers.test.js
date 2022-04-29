import { formDataToObject } from '../src/js/helpers';

jest.mock('../__mocks__/mock.js');

test('функция вовзращает из formData объект', () => {
  expect(formDataToObject(testForm)).toBe({
    key1: 'value1',
    key2: 'value2',
  });
});
