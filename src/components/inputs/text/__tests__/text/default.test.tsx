import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Text } from '../../';

describe('Text', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Text placeholder="" />);
    expect(
      '<div><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><input css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." type="text" placeholder="" value=""></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
