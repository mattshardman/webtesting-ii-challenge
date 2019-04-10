import React from 'react';
import * as rt from 'react-testing-library';
import Container from './Container';
import { rand } from '../../lib/utils';

afterEach(rt.cleanup);

jest.mock('../../lib/utils');

const testValues = [{
  val: 0,
  output: 'strike',
},
{
  val: 1,
  output: 'ball',
},
{
  val: 2,
  output: 'foul',
},
{
  val: 3,
  output: 'hit',
}];

describe("container", () => {
  it("increases the ball count by one when a ball is pitched", () => {
    const container = rt.render(<Container />);
    expect(container.getByText(/balls/i));
  });

  testValues.map((each) => {
    it('returns correct value when button is clicked', async () => {
      const { getByText, getByTestId } = rt.render(<Container />);
      rand.mockImplementation(() => each.val);
      await rt.fireEvent.click(getByText(/next ball/i));
      const pitchDiv = getByTestId('current-pitch');
      expect(pitchDiv.textContent).toContain(each.output);
    });
  });
});
