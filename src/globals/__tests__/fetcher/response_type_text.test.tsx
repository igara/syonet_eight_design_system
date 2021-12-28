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
      url: `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/2015-10-11 18-51-31-[メモ]Vagrantを使ってVMを起動する`,
      type: 'text',
    });
    expect(result).toEqual('hoge');
  });
});
