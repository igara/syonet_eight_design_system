import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRByURL } from '../../';

describe('use_swr_by_url', () => {
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

    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRByURL({ url: 'https://example.syonet.work', type: 'text' });

      return <div>{result.data}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('hoge'));
    expect(TestingLibrary.screen.getByText('hoge')).toBeInTheDocument();
  });
});
