import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Dialog } from '../..';

describe('MenuIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(
      <Dialog isOpen={false} onClose={() => {}} />,
    );
    expect(
      '<div><dialog css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div></div><span css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."></span></div></dialog></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
