import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRSharedState } from '../..';

describe('use_swr_shared_state', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('default', async () => {
    const Test1Component = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [state1, setState1] = useSWRSharedState('aaaa');
      const [state2, setState2] = useSWRSharedState('aaaa');

      return (
        <div>
          state:{state1}
          {state2}
        </div>
      );
    };

    TestingLibrary.render(<Test1Component />);
    expect(TestingLibrary.screen.getByText('state:')).toBeInTheDocument();

    const Test2Component = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [state1, setState1] = useSWRSharedState('aaaa', 'hoge');
      setState1('fuga');
      const [state2, setState2] = useSWRSharedState('aaaa');

      return (
        <div>
          state:{state1}
          {state2}
        </div>
      );
    };

    TestingLibrary.cleanup();

    TestingLibrary.render(<Test2Component />);
    expect(TestingLibrary.screen.getByText('state:hogefuga')).toBeInTheDocument();

    TestingLibrary.cleanup();

    TestingLibrary.render(<Test1Component />);
    expect(TestingLibrary.screen.getByText('state:fugafuga')).toBeInTheDocument();
  });
});
