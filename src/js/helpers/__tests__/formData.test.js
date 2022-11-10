import { formDataToObject } from '../formData';

describe('Helpers > formData', () => {
  it('Should return correctly object', () => {
    const formData = new FormData();
    formData.append('key1', 'test value');
    formData.append('key2', '');

    const result = formDataToObject(formData);

    expect(result).toEqual({ key1: 'test value', key2: '' });
  });
});

