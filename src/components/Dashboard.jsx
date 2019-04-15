import React from 'react';

function Dashboard({ balls, strikes }) {
  return (
    <div>
      <div>
           Balls: {balls}
      </div>
      <div>
            Strikes: {strikes}
      </div>
    </div>
  );
}

export default Dashboard;
