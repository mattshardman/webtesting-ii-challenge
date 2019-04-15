import React from 'react';
import * as rt from 'react-testing-library';
import Dashboard from './Dashboard';

afterEach(rt.cleanup);

describe("container", () => {
  it("record the correct number of balls and strikes", () => {
    const { getByText } = rt.render(<Dashboard balls={3} strikes={1} />);
    expect(getByText(/balls: 3/i));
    expect(getByText(/strikes: 1/i));
  });
});
