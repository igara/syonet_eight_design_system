import React from 'react';
import TestingLibrary from '@testing-library/react';
import { GlobalDialog } from '../../';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom';

describe('GlobalDialog', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', async () => {
    TestingLibrary.render(
      <RecoilRoot>
        <GlobalDialog uid={'aaaa'}>aaaa</GlobalDialog>
        <GlobalDialog uid={'bbbb'}>bbbb</GlobalDialog>
        <GlobalDialog uid={'cccc'}>cccc</GlobalDialog>
      </RecoilRoot>,
    );

    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('cccc'));
    expect(TestingLibrary.screen.getByText('cccc')).toBeInTheDocument();

    TestingLibrary.fireEvent.click(TestingLibrary.screen.getByRole('button'));

    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('bbbb'));
    expect(TestingLibrary.screen.getByText('bbbb')).toBeInTheDocument();

    TestingLibrary.fireEvent.click(TestingLibrary.screen.getByRole('button'));

    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('aaaa'));
    expect(TestingLibrary.screen.getByText('aaaa')).toBeInTheDocument();
  });
});
