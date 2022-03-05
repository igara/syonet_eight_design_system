import React from 'react';
import TestingLibrary from '@testing-library/react';
import { ArrowDownIcon } from '../../';

describe('ArrowDownIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<ArrowDownIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
