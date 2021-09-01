import React from "react";
import PortfolioWrapper from "../shared/styles/PortfolioWrapper";

function portfolioPage() {
  return (
    <PortfolioWrapper>
      <section id='portfolio' className='portfolio'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Portfolio</h2>
            <p>
              In-depth Case Studies to show you what I can offer and how I work.
            </p>
          </div>

          <div className='row' data-aos='fade-up' data-aos-delay='100'>
            <div className='col-lg-12 d-flex justify-content-center'>
              <ul id='portfolio-flters'>
                <li data-filter='*' className='filter-active'>
                  All
                </li>
                <li data-filter='.filter-app'>All</li>
                <li data-filter='.filter-card'>Angular</li>
                <li data-filter='.filter-web'>Reactjs</li>
                <li data-filter='.filter-web'>React_Native</li>
              </ul>
            </div>
          </div>

          <div
            className='row portfolio-container'
            data-aos='fade-up'
            data-aos-delay='200'>
            <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/portfolio/portfolio-7.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-7.jpg'
                      data-gallery='portfolioGallery'
                      className='portfolio-lightbox'
                      title='Card 1'>
                      <i className='bx bx-plus'></i>
                    </a>
                    <a
                      href='portfolio-details.html'
                      className='portfolio-details-lightbox'
                      data-glightbox='type: external'
                      title='Portfolio Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/portfolio/portfolio-8.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-8.jpg'
                      data-gallery='portfolioGallery'
                      className='portfolio-lightbox'
                      title='Card 3'>
                      <i className='bx bx-plus'></i>
                    </a>
                    <a
                      href='portfolio-details.html'
                      className='portfolio-details-lightbox'
                      data-glightbox='type: external'
                      title='Portfolio Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/portfolio/portfolio-9.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-9.jpg'
                      data-gallery='portfolioGallery'
                      className='portfolio-lightbox'
                      title='Web 3'>
                      <i className='bx bx-plus'></i>
                    </a>
                    <a
                      href='portfolio-details.html'
                      className='portfolio-details-lightbox'
                      data-glightbox='type: external'
                      title='Portfolio Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PortfolioWrapper>
  );
}

export default portfolioPage;
