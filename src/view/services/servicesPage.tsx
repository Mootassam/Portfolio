import React from "react";
import ServiceWrapper from "../shared/styles/ServiceWrapper";
import { FaAngular, FaReact, FaNodeJs, FaPhp, FaServer } from "react-icons/fa";
function servicesPage() {
  return (
    <ServiceWrapper>
      <section id='services' className='services'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>MY FULL-STACK DEVELOPMENT SERVICES</h2>
            <p>
              At Brainvire, my full-stack development solutions involve all
              types of tools and frameworks, such as Node.js, rapid js, full
              stack, Express, MongoDB, AngularJS, React, jQuery, and others! my
              full-stack web developers build robust web applications that help
              unleash the full potential of ymy business.
            </p>
          </div>

          <div className='row'>
            <div
              className='col-lg-4 col-md-6 d-flex align-items-stretch'
              data-aos='zoom-in'
              data-aos-delay='100'>
              <div className='icon-box iconbox-blue'>
                <div className='icon'>
                  <FaReact size={100} />
                </div>
                <h4>
                  <a href=''>REACT</a>
                </h4>
                <p>
                  A JavaScript library, React assists in creating top-notch user
                  interfaces. React.js development is widely preferred, as it
                  helps deliver excellent server and client-side rendering.
                </p>
              </div>
            </div>

            <div
              className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0'
              data-aos='zoom-in'
              data-aos-delay='200'>
              <div className='icon-box iconbox-pink '>
                <div className='icon'>
                  <FaAngular size={100} />
                </div>
                <h4>
                  <a href=''>ANGULARJS</a>
                </h4>
                <p>
                  AngularJS is popular because of the flexibility it brings to
                  all types of web app development. You can develop a browser,
                  as well as mobile and web-based apps, with AngularJS.
                </p>
              </div>
            </div>

            <div
              className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0'
              data-aos='zoom-in'
              data-aos-delay='300'>
              <div className='icon-box iconbox-orange'>
                <div className='icon'>
                  <FaNodeJs size={100} />
                </div>
                <h4>
                  <a href=''>NODE.JS</a>
                </h4>
                <p>
                  Node.js is perhaps the best platform for quickly developing a
                  network of scalable applications. With its cross-browser
                  atmosphere, it is built to serve as a workhorse for
                  developers.
                </p>
              </div>
            </div>

            <div
              className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'
              data-aos='zoom-in'
              data-aos-delay='100'>
              <div className='icon-box iconbox-teal'>
                <div className='icon'>
                  <FaReact size={100} />
                </div>
                <h4>
                  <a href=''>REACT NATIVE</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>

            <div
              className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'
              data-aos='zoom-in'
              data-aos-delay='200'>
              <div className='icon-box iconbox-red'>
                <div className='icon'>
                  <FaPhp size={100} />
                </div>
                <h4>
                  <a href=''>PHP</a>
                </h4>
                <p>
                  With its simplified programming, PHP is used to create dynamic
                  web pages. Used for web development, it is a server-side
                  scripting language that builds robust back-end systems.
                </p>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'
              data-aos='zoom-in'
              data-aos-delay='300'>
              <div className='icon-box iconbox-yellow'>
                <div className='icon'>
                  <FaServer size={100} />
                </div>
                <h4>
                  <a href=''>DevOps</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceWrapper>
  );
}

export default servicesPage;
