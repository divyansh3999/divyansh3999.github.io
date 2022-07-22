import { React, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Login() {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const clientID =
    "575395430668-rk69b4hlv12sh82qdtindo45dvb14dn8.apps.googleusercontent.com";
  const onLoginSuccess = (res) => {
    let response = res.profileObj;
    console.log("login success : ", response);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };
  const onFailureSuccess = (res) => {
    console.log("login Failure : ", res);
  };
  const onLogoutSuccess = () => {
    console.log("logout successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };
  return (
    <main className="form-signin bg-light">
      <form className="text-center">
        {showLoginButton ? (
          <GoogleLogin
            clientId={clientID}
            buttonText="Continue with google"
            onSuccess={onLoginSuccess}
            onFailure={onFailureSuccess}
            cookiePolicy={"single_host_origin"}
          />
        ) : null}
        {showLogoutButton ? (
          <GoogleLogout
            clientId={clientID}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
          ></GoogleLogout>
        ) : null}
        <div className=" my-2 form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="my-2 w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2022–2022</p>
      </form>
    </main>
  );
}
