import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "magnustestdb.auth0.com",
    clientID: "YHLsV4PwAigOA6YBWfv8UHZ7bBHF8ubz",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  signin(email, password) {
    console.log(email, password);
    return new Promise((resolve, reject) => {
      this.auth0.client.login(
        {
          realm: "Username-Password-Authentication",
          username: email,
          password
        },
        (err, authResult) => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          this.setSession(authResult);
          return resolve();
        }
      );
    });
  }

  signout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    window.location.href = "/login";
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          return resolve();
        } else if (err) {
          console.log(err);
          return reject(err);
        }
      });
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 2592000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    console.log(expiresAt);
    return new Date().getTime() < expiresAt;
  }
}
