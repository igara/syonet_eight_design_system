import React from 'react';
import TestingLibrary from '@testing-library/react';
import { ProgressImage } from '../../';

describe('ProgressImage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
          });
        }),
    );

    const renderTest = TestingLibrary.render(<ProgressImage alt="" src="" />);
    expect(
      '<div><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><svg viewBox="0 0 64 64" css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><circle cx="50%" cy="50%" r="15.9154"></circle></svg><svg viewBox="0 0 64 64" css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><circle cx="50%" cy="50%" r="15.9154"></circle></svg></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
