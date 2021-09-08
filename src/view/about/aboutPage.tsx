import React from "react";
import AboutWrapper from "../shared/styles/AboutWrapper";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaAngular,
  FaDocker,
  FaGitSquare,
  FaUbuntu,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNginx } from "react-icons/si";
function aboutPage() {
  return (
    <AboutWrapper>
      <section id='about' className='about'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>About</h2>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <img src='assets/img/about.jpg' className='img-fluid' />
            </div>
            <div className='col-lg-8 pt-4 pt-lg-0 content'>
              <h3>Hi! I'm Mootassam Boughdiri</h3>
              <p className='fst-italic'>
                A Full Stack Developer with 1+ year of hands-on experience
                designing, developing, and implementing applications and
                solutions using a range of technologies and programming
                languages. Seeking a challenging role as a Full-Stack Developer
                where I can apply my broad development experience and hands-on
                technical expertise.
              </p>
              <div className='row'>
                <div className='col-lg-6'>
                  <ul>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>Birthday:</strong> 1 May 1995
                    </li>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>Website:</strong> www.example.com
                    </li>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>Phone:</strong> +123 456 7890
                    </li>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>City:</strong> City : New York, USA
                    </li>
                  </ul>
                </div>
                <div className='col-lg-6'>
                  <ul>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>Age:</strong> 24
                    </li>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>Degree:</strong> Master
                    </li>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>PhEmailone:</strong> email@example.com
                    </li>
                    <li>
                      <i className='bi bi-rounded-right'></i>
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className='skills'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Skills</h2>
          </div>

          <div className='row skills-content'>
            <div className='row'>
              <div className='col col-lg-2'>
                <FaReact size={80} />
              </div>
              <div className='col col-lg-2'>
                <FaHtml5 size={80} />
              </div>
              <div className='col col-lg-2'>
                <FaCss3 size={80} />
              </div>
              <div className='col col-lg-2'>
                <FaNodeJs size={80} />
              </div>
              <div className='col col-lg-2'>
                <FaNodeJs size={80} />
              </div>
              <div className='col col-lg-2'>
                <SiTypescript size={80} />
              </div>
            </div>

            <div className='row'>
              <div className='col col-lg-2'>
                <FaAngular size={80} />
              </div>
              <div className='col col-lg-2'>
                <SiJavascript size={80} />
              </div>
              <div className='col col-lg-2'>
                <FaDocker size={80} />
              </div>
              <div className='col col-lg-2'>
                <SiNginx size={80} />
              </div>
              <div className='col col-lg-2'>
                <FaGitSquare size={80} />
              </div>
              <div className='col-lg-2'>
                <FaUbuntu size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AboutWrapper>
  );
}

export default aboutPage;
