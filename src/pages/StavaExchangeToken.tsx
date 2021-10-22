import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StravaAuthService } from '../api/strava.auth.service';
import { RouteComponentProps } from 'react-router-dom';


const StravaExchangeToken: React.FC<RouteComponentProps> = (): JSX.Element => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  const stravaExchangeToken = async () => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let authorization_code = urlParams.get('code');

    try {
      await StravaAuthService.getToken(authorization_code).then(async (res) => {
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
      history.push('/');
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
