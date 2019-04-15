import React from 'react';
import styled from 'styled-components';

const CurrentPitch = styled.div`
    width: 250px;
    height: 100px;
    border: 1px solid #eaeaea;
`;

function Display({ _pitch, currentPitch }) {
  return (
    <div>
      <CurrentPitch data-testid="current-pitch">
        {currentPitch}
      </CurrentPitch>
      <button onClick={_pitch}>Next ball</button>
    </div>
  );
}

export default Display;
