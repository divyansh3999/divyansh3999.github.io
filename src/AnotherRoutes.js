import React from "react";
import "./web/comp/css/style.css";
import Login from "./googleLogin/Login";

export default function AnotherRoutes() {
  return (
    <>
      <div className="g-signin">
        <Login />
      </div>
    </>
  );
}
