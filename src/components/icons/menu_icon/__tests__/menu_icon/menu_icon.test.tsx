import React from 'react';
import TestingLibrary from '@testing-library/react';
import { MenuIcon } from '../../menu_icon';

describe('MenuIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<MenuIcon />);
    expect(
      '<div><i css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).">c</i></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
