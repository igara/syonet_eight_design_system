import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRSharedState } from '../..';

describe('use_swr_shared_state', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('default', async () => {
    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [state1, setState1] = useSWRSharedState('aaaa', 'hoge');
      setState1('fuga');
      const [state2, setState2] = useSWRSharedState('aaaa');

      return (
        <div>
          {state1}
          {state2}
        </div>
      );
    };

    TestingLibrary.render(<TestComponent />);
    expect(TestingLibrary.screen.getByText('hogefuga')).toBeInTheDocument();
  });
});
