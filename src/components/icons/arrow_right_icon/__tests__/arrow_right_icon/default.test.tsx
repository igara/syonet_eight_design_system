import React from 'react';
import TestingLibrary from '@testing-library/react';
import { ArrowRightIcon } from '../../';

describe('ArrowRightIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<ArrowRightIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
