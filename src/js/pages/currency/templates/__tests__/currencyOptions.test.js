import currencyOptionsChunk from '../currencyOptions';

describe('Template > currencyOptionsChunk', () => {
  it('Should return correct options count', () => {
    const arr = ['test', '2', '3'];
    const html = currencyOptionsChunk(arr);

    expect(html).toBe('<option>test</option><option>2</option><option>3</option>');
  });
});
