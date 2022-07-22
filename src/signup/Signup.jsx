import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [signEmail, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cPassword, setCPassword] = useState("");
  const signNavigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    // if (password === cPassword) {
    const url = "http://localhost:4000/api/signup";
    axios
      .post(url, {
        firstname: name,
        lastname: lname,
        email: signEmail,
        password: password,
        confirmpassword: cPassword,
      })
      .then((response) => {
        // let message = response.data.message;
        if (response.status == 200) {
          signNavigate("/login");
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log("password matched");
        } else {
          console.log("password not matched");
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // } else {
    //   toast.error(response.data.error, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="section">
              <h1>
                Signup <span>Yourself</span>
              </h1>
              <p>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
            </div>
          </div>
          <form className="col-md-10 mx-auto col-lg-5">
            <div className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="textName"
                  placeholder="First Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last Name"
                  required
                  value={lname}
                  onChange={(e) => setlName(e.target.value)}
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="signupEmail"
                  placeholder="name@example.com"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={signEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  minLength="8"
                  className="form-control"
                  id="signupPassword"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="signupcPassword"
                  minLength="8"
                  placeholder="Confirm Password"
                  required
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                onClick={onSubmit}
                type="submit"
              >
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
