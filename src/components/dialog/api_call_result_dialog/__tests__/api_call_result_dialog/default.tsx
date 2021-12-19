import React from 'react';
import TestingLibrary from '@testing-library/react';
import { APICallResultDialog } from '../..';

describe('APICallResultDialog', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<APICallResultDialog onClose={() => {}} />);
    expect(
      '<div><dialog css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><label>システムエラー:<br><textarea readonly=""></textarea></label></div><span css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."></span></div></dialog></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });

  test('エラーがあるとき', () => {
    const renderTest = TestingLibrary.render(
      <APICallResultDialog error="エラーがあるとき" onClose={() => {}} />,
    );
    expect(
      '<div><dialog css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." open=""><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><label>システムエラー:<br><textarea readonly="">エラーがあるとき</textarea></label></div><span css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."></span></div></dialog></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
