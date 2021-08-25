import React from "react";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className='exception'>
      <div className='imgBlock'>
        <div className='imgEle' />
      </div>
      <div className='content'>
        <h1>404</h1>
        <div className='desc'>Errors 404 </div>
        <div className='actions'>
          <Link to='/'>
            <button className='btn btn-primary' type='button'>
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
