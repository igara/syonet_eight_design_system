import { fetcher } from '../../';

describe('fetcher', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('response_type_text', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            text: async () => 'hoge',
          });
        }),
    );

    const result = await fetcher({
      url: 'https://example.syonet.work',
      type: 'text',
    });
    expect(result).toEqual('hoge');
  });
});
