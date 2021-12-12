import React from 'react';
import TestingLibrary from '@testing-library/react';
import { XXXXX } from '../../';

describe('XXXXX', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<XXXXX />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
