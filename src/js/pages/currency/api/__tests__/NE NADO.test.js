import getCurrencyBuy from '../getCurrencyBuy';

const mockFetch = (response) => jest.fn().mockImplementation(
  () => Promise.resolve({
    json: () => Promise.resolve(response),
  }),
);

describe('Pages > Currency > api > getCurrencyBuy', () => {
  const params = {
    from: '123',
    to: '321',
    sum: 34,
  };

  describe('Positive cases', () => {
    const expectedParams = { ...params, amount: params.sum };
    delete expectedParams.sum;

    beforeEach(() => {
      global.fetch = mockFetch({ payload: [] });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Should call fetch with right method and body', async () => {
      await getCurrencyBuy(params);
      expect(global.fetch).toBeCalledWith(
        expect.anything(),
        {
          body: JSON.stringify(expectedParams),
          method: 'POST',
          headers: expect.anything(),
        },
      );
    });

    it('Should return correctly data', async () => {
      const result = await getCurrencyBuy(params);
      expect(result).toEqual([]);
    });
  });

  describe('Negative cases', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Should return error', async () => {
      global.fetch = mockFetch({ error: 'I should fail' });
      await expect(getCurrencyBuy(params))
        .rejects
        .toThrow('I should fail');
    });

    it('Should remove tokent by Unauthorized error', async () => {
      global.fetch = mockFetch({ error: 'Unauthorized' });

      jest.spyOn(Storage.prototype, 'removeItem');
      Storage.prototype.removeItem = jest.fn();

      await expect(getCurrencyBuy(params))
        .rejects
        .toThrow('Unauthorized');
      expect(sessionStorage.removeItem).toBeCalledWith('token');
    });
  });
});
