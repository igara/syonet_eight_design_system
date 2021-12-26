import { fetcher } from '../../';

describe('fetcher', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('default', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            json: async () => ({
              message: 'ok',
            }),
          });
        }),
    );

    const result = await fetcher('https://example.syonet.work');
    expect({
      message: 'ok',
    }).toEqual(result);
  });
});
