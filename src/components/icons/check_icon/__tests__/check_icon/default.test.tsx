import React from 'react';
import TestingLibrary from '@testing-library/react';
import { CheckIcon } from '../../';

describe('CheckIcon', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<CheckIcon />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
