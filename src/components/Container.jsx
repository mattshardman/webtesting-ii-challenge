import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Display from './Display';

function Container() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

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

  return (
    <>
      <Dashboard />
      <Display />
    </>
  );
}

export default Container;
