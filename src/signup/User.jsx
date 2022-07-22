import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
    let name = localStorage.getItem("name");
    let lastName = localStorage.getItem("lname");
    let email = localStorage.getItem("email");
    
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-4 offset-md-4">
            <div className="feature col">
              <div className="feature-icon bg-primary bg-gradient"></div>
              <h2 className="text-light">{name}</h2>
              <p className="text-light">{lastName}</p>
              <a href="mailto:" className="icon-link">
              {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
