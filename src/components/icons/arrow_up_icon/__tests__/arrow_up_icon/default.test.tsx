import React from 'react';
import TestingLibrary from '@testing-library/react';
import { ArrowUpIcon } from '../../';

describe('ArrowUpIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<ArrowUpIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
