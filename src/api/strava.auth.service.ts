// import fetch from 'isomorphic-fetch';
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT, REACT_APP_SCOPE } = process.env;
export class StravaAuthService {
  static stravaAuth = async () => {
    window.location.href = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT}&approval_prompt=force&scope=${REACT_APP_SCOPE}`;
  }

  static getToken(authorization_code: string | null): Promise<Response> {
    let refreshTokenUrl = `https://www.strava.com/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authorization_code}&grant_type=authorization_code`;
    return fetch(refreshTokenUrl, {
      method: 'POST',
      mode: 'cors'
    })
    .then(res => res.json())
    .catch((err: Response) => Promise.reject(err));
  }
}