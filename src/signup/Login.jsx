import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  // for google login
  const [showLoginButton, setShowLoginButton] = useState(true);
  const clientID =
    "575395430668-8bhei2d3hqf5iumpe94sbb18sdp6up4a.apps.googleusercontent.com";
  const onLoginSuccess = (res) => {
    console.log("resd", res);
    let response = res.profileObj;
    console.log("response", response);
    if (res.tokenId) {
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
    localStorage.setItem("googleId", response.googleId);
    localStorage.setItem("googleGivenName", response.givenName);
    localStorage.setItem("googleName", response.name);
    localStorage.setItem("googleImg", response.imageUrl);
    localStorage.setItem("googleEmail", response.email);

    console.log(localStorage.getItem("googleId"));
    if (localStorage.getItem("googleId")) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  };
  const onFailureSuccess = (res) => {
    console.log("login Failure : ", res);
  };
  const navigate = useNavigate();
  const [logEmail, setEmail] = useState("");
  const [logPassword, setPass] = useState("");
  const loginHandler = (event) => {
    event.preventDefault();
    const url = "http://localhost:4000/api/login";
    axios
      .post(url, {
        email: logEmail,
        password: logPassword,
      })
      .then((response) => {
        let success = response.data.success;
        let storeToken = response.data.token;
        if (success == true) {
          localStorage.setItem("token", storeToken);
          localStorage.setItem("name", response.data.data.firstName);
          localStorage.setItem("lname", response.data.data.lastName);
          localStorage.setItem("email", response.data.data.email);
          navigate("/user-info");
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="section">
              <h1>
                Login <span>Yourself</span>
              </h1>
              <p>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={loginHandler}
            >
              <div className="form-floating my-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={logEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={logPassword}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                className="w-100 btn my-2 btn-lg btn-primary"
                type="submit"
              >
                Login
              </button>
              {showLoginButton ? (
                <GoogleLogin
                  clientId={clientID}
                  buttonText="Continue with google"
                  onSuccess={onLoginSuccess}
                  onFailure={onFailureSuccess}
                  cookiePolicy={"single_host_origin"}
                />
              ) : null}
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Login up, you can access the website.
              </small>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
