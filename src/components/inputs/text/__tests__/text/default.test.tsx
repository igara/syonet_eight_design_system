import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Text } from '../../';

describe('Text', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Text />);
    expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
  });
});
