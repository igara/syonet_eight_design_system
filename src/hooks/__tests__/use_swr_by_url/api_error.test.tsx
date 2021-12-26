import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRByURL } from '../../';

const spyConsoleError = jest.spyOn(global.console, 'error').mockImplementation();

describe('use_swr_by_url', () => {
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

    const TestComponent = () => {
      const result = useSWRByURL('https://example.syonet.work');

      return <div>{result.error && 'error message'}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('error message'));
    expect(TestingLibrary.screen.getByText('error message')).toBeInTheDocument();

    expect([[{ ok: false, status: 500 }]]).toEqual(spyConsoleError.mock.calls);
  });
});
