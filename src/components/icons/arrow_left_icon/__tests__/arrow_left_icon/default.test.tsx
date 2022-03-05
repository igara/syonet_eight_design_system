import React from 'react';
import TestingLibrary from '@testing-library/react';
import { ArrowLeftIcon } from '../../';

describe('ArrowLeftIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<ArrowLeftIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
