import React from "react";
import { Link } from "react-router-dom";
import HomeWrapper from "../shared/styles/HomeWrapper";
function HomePage() {
  return (
    <HomeWrapper>
      <section id='hero' className='d-flex align-items-center'>
        <div
          className='container d-flex flex-column align-items-center'
          data-aos='zoom-in'
          data-aos-delay='100'>
          <h1>Hi, I'm Mootassam</h1>
          <h2>I'm a Full stack developer from San Francisco</h2>
          <Link to={"/about"} className='btn-about'>
            About Me
          </Link>
        </div>
      </section>
    </HomeWrapper>
  );
}

export default HomePage;
