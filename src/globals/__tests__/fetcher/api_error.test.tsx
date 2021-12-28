import { fetcher } from '../../';

const spyConsoleError = jest.spyOn(global.console, 'error').mockImplementation();

describe('fetcher', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('APIエラー', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((_, reject) => {
          reject({
            ok: false,
            status: 500,
          });
        }),
    );

    try {
      await fetcher({
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara',
      });
    } catch (_) {
      expect([[{ ok: false, status: 500 }]]).toEqual(spyConsoleError.mock.calls);
    }
  });
});
