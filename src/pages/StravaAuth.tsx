import React, { useEffect, useState } from 'react';
import { StravaAuthService } from '../api/strava.auth.service';
import { RouteComponentProps } from 'react-router-dom';


const StravaAuth:React.FC<RouteComponentProps> = (): JSX.Element => {
  const [err, setErr] = useState(false);

  const auth = async () => {
    try {
      await StravaAuthService.stravaAuth();
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <></>
  );
}

export default StravaAuth;
