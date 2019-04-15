import React from 'react';
import * as rt from 'react-testing-library';
import Display from './Display';

afterEach(rt.cleanup);

describe('display', () => {
  it('displays current pitch', () => {
    const display = rt.render(<Display currentPitch="hit" />);
    expect(display.getByText(/hit/i));
  });
});
