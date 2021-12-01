import React from 'react';
import TestingLibrary from '@testing-library/react';
import { MenuIcon } from '../../';

describe('MenuIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<MenuIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
