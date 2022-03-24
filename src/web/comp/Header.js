import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar mt-3 navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"
                fill="#5658DD"
                fillRule="nonzero"
              />
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg viewBox="0 0 100 80" width="30" height="30" fill="#fff">
                {" "}
                <rect width="100" height="10"></rect>{" "}
                <rect y="30" width="100" height="10"></rect>{" "}
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button className="btn mainBtn py-1 px-3 mx-2 text-light">
              Sign Up
            </button>
            <h1 className="fs-6 my-0 text-secondary mx-5">Documentation</h1>
          </div>
        </div>
      </nav>
    </>
  );
}
