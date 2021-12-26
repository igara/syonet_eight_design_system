import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRByURL } from '../../';

describe('use_swr_by_url', () => {
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

    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRByURL('https://example.syonet.work');

      return <div>{result.data && result.data.message}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('ok'));
    expect(TestingLibrary.screen.getByText('ok')).toBeInTheDocument();
  });
});
