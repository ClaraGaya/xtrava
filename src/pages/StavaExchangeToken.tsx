import React, { useEffect, useState } from 'react';
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;


function StravaExchangeToken() {
  const [state, setState] = useState();

  const stravaExchangeToken = async () => {
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let authorization_code = urlParams.get('code');
    let refreshTokenUrl = `https://www.strava.com/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authorization_code}&grant_type=authorization_code`;
    fetch(refreshTokenUrl, {
      method: 'POST'
    })
    .then(res => res.json())
  }

  useEffect(() => {
    stravaExchangeToken();
  }, []);

  return (
    <></>
  );
}

export default StravaExchangeToken;
