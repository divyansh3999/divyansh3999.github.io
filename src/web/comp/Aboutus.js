import React from "react";

export default function Aboutus() {
  return (
    <>
      <section className="aboutUs text-center py-5" >
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="section">
              <h1 data-aos={"fade-left"}>
                Landing template for <span>startups</span>
              </h1>
              <p className="text-center">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
            </div>
            <div
              className="btn-group py-4"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn mainBtn py-2 px-4 mx-2 text-light"
              >
                Get Started
              </button>
              <button
                type="button"
                className="btn secBtn py-2 px-4 mx-2 text-light"
              >
                View On Github
              </button>
            </div>
            <div className="imgDiv pt-4">
              <img
                src="https://source.unsplash.com/random/900×500/?computer"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
