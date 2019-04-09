import React from 'react';
import * as rt from 'react-testing-library';
import Display from './Display';

afterEach(rt.cleanup);

describe('display', () => {
  it('contains a button', () => {
    const display = rt.render(<Display />);
  });
});
