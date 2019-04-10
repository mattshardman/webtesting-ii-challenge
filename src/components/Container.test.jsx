import React from 'react';
import * as rt from 'react-testing-library';
import Container from './Container';

afterEach(rt.cleanup);

describe("container", () => {
  it("increases the ball count by one when a ball is pitched", () => {
    const container = rt.render(<Container />);
    expect(container.getByText(/balls/i));
  });

  it('returns a current pitch value when button is clicked', async () => {
    const { getByText, getByTestId } = rt.render(<Container />);
    await rt.fireEvent.click(getByText(/next ball/i));
    const pitchDiv = getByTestId('current-pitch');
    expect(pitchDiv.textContent).toContain('');
  });
});
