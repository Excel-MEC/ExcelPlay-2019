import * as auth0 from 'auth0-js';
import cookieService from 'universal-cookie';

import { ApiRoot } from './api';

import Spinner from '../components/common/Spinner/Spinner';

export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'GuilcIQmL08rvCGrIoKXx4AdnvMNod0i',
    domain: 'excelplay2018.auth0.com',
    responseType: 'token id_token',
    // audience: 'https://excelplay2k18.auth0.com/userinfo',
    redirectUri:
      'http://' +
      window.location.hostname +
      (window.location.port ? ':' + window.location.port : '') +
      '/callback',
    scope: 'openid profile email',
  });

  constructor() {
    const csrftoken = cookieService.get('csrftoken');
    if (!csrftoken) {
      const loader = new ProgressiveLoader();
      loader.placeLoader('Auth_const');
      this.http
        .get(ApiRoot() + '/auth/v1/token', {
          withCredentials: true,
          observe: 'response',
        })
        .subscribe(res => {
          console.log(res);
          loader.removeLoader();
          // window.location.reload(true);
        });
    }
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult).subscribe(res => {
          // navigate to /
        });
      } else if (err) {
        // navigate to sign in
      }
    });
  };

  setSession = authResult => {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    const body = new FormData();
    const csrftoken = cookieService.get('csrftoken');
    // if (csrftoken) {
    body.append('access_token', authResult.accessToken);
    body.append('csrfmiddlewaretoken', csrftoken);
    // const loader = new ProgressiveLoader();
    // loader.placeLoader('Auth_ss');
    // return this.http
    //   .post(ApiRoot() + '/auth/v1/signin', body, { withCredentials: true })
    //   .pipe(
    //     map(res => {
    //       loader.removeLoader();
    //       // console.log(res.json());
    //       return res;
    //     }),
    //   );
    // }
  };

  logout = () => {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  };

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const access_token = localStorage.getItem('access_token');
    return access_token && new Date().getTime() < expiresAt;
  };

  pullUserCount = () => {};
}
