import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Display from './Display';

import { rand } from '../../lib/utils';

function Container() {
  const [currentPitch, setCurrentPitch] = useState();
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const _pitch = () => {
    const type = ["strike", "ball", "foul", "hit"];
    const run = type[rand()];
    setCurrentPitch(run);
  };

  useEffect(() => {
    if (balls === 4) {
      setBalls(0);
      setStrikes(0);
    }

    if (strikes === 3) {
      setBalls(0);
      setStrikes(0);
    }
  }, [balls, strikes]);

  useEffect(() => {
    switch (currentPitch) {
      case "ball":
        return setBalls(current => current + 1);
      case "strike":
        return setStrikes(current => current + 1);
      case "hit":
        setStrikes(0);
        return setBalls(0);
      case "foul":
        return setBalls(current => current + 1);
      default:
    }
  }, [currentPitch]);

  return (
    <>
      <Dashboard
        balls={balls}
        strikes={strikes}
      />
      <Display
        currentPitch={currentPitch}
        _pitch={_pitch}
      />
    </>
  );
}

export default Container;
