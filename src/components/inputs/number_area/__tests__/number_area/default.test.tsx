import React from 'react';
import TestingLibrary from '@testing-library/react';
import { NumberArea } from '../..';

describe('NumberArea', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(
      <NumberArea defaultValue={3} min={1} max={10} />,
    );
    expect(
      '<div><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><span css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><svg class="css-1d3bgr4" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M29.75 12.25L8.75 32.25L29.75 52.25L19.75 35.75L55.25 33.25L55.25 30.75L19.75 27.75L29.75 12.25Z" fill="black" stroke="black" stroke-width="2"></path></svg></span><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><input css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)." type="text" size="2" maxlength="2" value="3"><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."> / 10</div></div><span css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><svg class="css-1d3bgr4" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M34.25 52.25L55.25 32.25L34.25 12.25L44.25 28.75L8.75 31.25L8.75 33.75L44.25 36.75L34.25 52.25Z" fill="black" stroke="black" stroke-width="2"></path></svg></span></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
