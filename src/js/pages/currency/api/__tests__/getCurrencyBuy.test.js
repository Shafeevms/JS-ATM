import getCurrencyBuy from '../getCurrencyBuy';
import * as CoreApi from '../../../../core/api';

describe('Pages > Currency > api > getCurrencyBuy', () => {
  const params = {
    from: '123',
    to: '321',
    sum: 34,
  };

  describe('Positive cases', () => {
    const expectedParams = { ...params, amount: params.sum };
    delete expectedParams.sum;
    let requestMock;

    afterEach(() => {
      jest.clearAllMocks();
    });

    beforeEach(() => {
      requestMock = jest.fn();
      jest.spyOn(CoreApi, 'request').mockImplementation((...args) => {
        requestMock(...args);
        return Promise.resolve({ payload: [] });
      });
    });

    it('Should call request', async () => {
      await getCurrencyBuy(params);
      expect(requestMock).toBeCalledWith({
        data: expectedParams,
        method: 'POST',
        URL: 'currency-buy',
      });
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

    beforeEach(() => {
      jest
        .spyOn(CoreApi, 'request')
        .mockImplementation(() => Promise.resolve({ error: 'I should fail' }));
    });

    it('Should return error', async () => {
      await expect(getCurrencyBuy(params))
        .rejects
        .toThrow('I should fail');
    });
  });
});
