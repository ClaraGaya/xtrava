import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StravaAuthService } from '../api/strava.auth.service';

const StravaExchangeToken = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  const stravaExchangeToken = async () => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let authorization_code = urlParams.get('code');

    try {
      await StravaAuthService.getToken(authorization_code).then(async(res) => {
        setAuth(true);
        return res;
      })
      .then((data) => {
        history.push({
          pathname: '/dashboard',
          state: data
        });
      });
    } catch (err) {
      setAuth(false);
    }
  }

  useEffect(() => {
    stravaExchangeToken();
  }, []);

  return (
    <></>
  );
}

export default StravaExchangeToken;
