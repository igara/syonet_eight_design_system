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
      '<div><dialog css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><label css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).">システムエラー:<br><textarea css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." readonly=""></textarea></label></div><button css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." type="button"></button></div></dialog></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });

  test('エラーがあるとき', () => {
    const renderTest = TestingLibrary.render(
      <APICallResultDialog error="エラーがあるとき" onClose={() => {}} />,
    );
    expect(
      '<div><dialog css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." open=""><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><label css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).">システムエラー:<br><textarea css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." readonly="">エラーがあるとき</textarea></label></div><button css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." type="button"></button></div></dialog></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
