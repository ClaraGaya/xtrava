import React, { useEffect, useState } from 'react';
const { REACT_APP_CLIENT_ID, REACT_APP_SCOPE, REACT_APP_REDIRECT } = process.env;


function StravaAuth() {
  const [state, setState] = useState();

  const stravaAuth = async () => {
    window.location.href = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT}&approval_prompt=force&scope=${REACT_APP_SCOPE}`;
  }

  useEffect(() => {
    stravaAuth();
  }, []);

  return (
    <></>
  );
}

export default StravaAuth;
