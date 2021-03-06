import React from "react";
import { Link } from "react-router-dom";
import ErrorWrapper from "src/view/shared/errors/styles/ErrorWrapper";
const Error404Page = () => {
  return (
    <ErrorWrapper>
      <div id='notfound'>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>400</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to={"/"}>Back To Home age</Link>
        </div>
      </div>
    </ErrorWrapper>
  );
};

export default Error404Page;
