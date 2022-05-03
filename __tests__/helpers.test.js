import { formDataToObject } from '../src/js/helpers';

//! хочу импортировать мок с объектом - как в документации не работет
//! если импортировать обычным импортом jest не понимает new FomData();

jest.mock('../__mocks__/formdata.js');

test('функция вовзращает из formData объект', () => {
  expect(formDataToObject(testForm)).toBe({
    key1: 'value1',
    key2: 'value2',
  });
});
