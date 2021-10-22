import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import PageWrapper from "../layouts/PageWrapper";


const Dashboard: React.FC<RouteComponentProps<{}, any, any>> = (data): JSX.Element => {
  const history = useHistory();
  const [state, setState] = useState(data.location.state || null);

  useEffect(() => {
    console.log('data', data)
    if (!state.access_token) history.push('/');
  }, []);

  return (
    <PageWrapper>
      <h1>Dashboard</h1>
      <p>hello {state.athlete?.firstname}</p>
    </PageWrapper>
  );
}

export default Dashboard;