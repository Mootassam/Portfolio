import React from "react";
import Footer from "src/view/Layout/Footer";

function homePage() {
  return (
    <>
      <section id='hero' className='d-flex align-items-center'>
        <div
          className='container d-flex flex-column align-items-center'
          data-aos='zoom-in'
          data-aos-delay='100'>
          <h1>Hi, I'm Mootassam</h1>
          <h2>I'm a Full stack developer from San Francisco</h2>
          <a href='about.html' className='btn-about'>
            About Me
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default homePage;
