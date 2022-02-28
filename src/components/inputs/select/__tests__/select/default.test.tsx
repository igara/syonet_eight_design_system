import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Select } from '../../';

describe('Select', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Select />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
