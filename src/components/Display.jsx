import React from 'react';

function Display({ _pitch, currentPitch }) {
  return (
    <div>
      <div>
        {currentPitch}
      </div>
      <button onClick={_pitch}>Next ball</button>
    </div>
  );
}

export default Display;
