import React, { useEffect, useState } from 'react';


const Dashboard = (data: { location: { state: any; }; }) => {
  const [state, setState] = useState(data.location.state || {});

  useEffect(() => {
  }, []);

  return (
    <>
    <h1>Dashboard</h1>
    <p>hello {state.athlete.firstname}</p>
    </>
  );
}

export default Dashboard;