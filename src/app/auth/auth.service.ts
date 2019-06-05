import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from '@app/config/settings';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import {
  LOCAL_STORAGE_JWT,
  IS_LOGGED_IN,
  JWT_EXPIRES_AT
} from '@app/resources/constants';
import { LocalStorageHelper } from '@app/helpers/local-storage.service';

@Injectable()
export class AuthService {

  private idTokenValue: string;
  private accessTokenValue: string;
  private expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: 'openid'
  });

  constructor(public router: Router) {
    this.idTokenValue = '';
    this.accessTokenValue = '';
    this.expiresAt = 0;
  }

  get accessToken(): string {
    return this.accessTokenValue;
  }

  get idToken(): string {
    return this.idTokenValue;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set isLoggedIn flag in window.localStorage.
    LocalStorageHelper.setItem(IS_LOGGED_IN, 'true');

    // Set the time that the access token will expire at.
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    LocalStorageHelper.setItem(JWT_EXPIRES_AT, expiresAt);

    // This is what we need to send to server.
    LocalStorageHelper.setItem(LOCAL_STORAGE_JWT, authResult.idToken);

    this.router.navigate(['/']);
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
       } else if (err) {
         console.log(`Could not get a new token (${err.error}: ${err.error_description}).`);
         this.logout();
       }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this.accessTokenValue = '';
    this.idTokenValue = '';
    this.expiresAt = 0;

    this.auth0.logout({
      returnTo: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Is logged in.
    const isLoggedIn = LocalStorageHelper.getItem(IS_LOGGED_IN);

    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = LocalStorageHelper.getItem(JWT_EXPIRES_AT);
    const isValidExpiryTime = new Date().getTime() < expiresAt;

    return isValidExpiryTime && isLoggedIn;
  }

}
