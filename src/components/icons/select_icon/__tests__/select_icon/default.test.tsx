import React from 'react';
import TestingLibrary from '@testing-library/react';
import { SelectIcon } from '../..';

describe('SelectIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<SelectIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
