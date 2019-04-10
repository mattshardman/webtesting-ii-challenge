import React from 'react';
import styled from 'styled-components';

const CurrentPitch = styled.div`
    width: 250px;
    height: 100px;
    border: 1px solid #eaeaea;
`;

function Display({ _pitch, _hit, swing }) {
  return (
    <div>
      <CurrentPitch data-testid="current-pitch">
        {swing}
      </CurrentPitch>
      <button onClick={_pitch}>Next ball</button>
      <button onClick={_hit}>Hit</button>
    </div>
  );
}

export default Display;
