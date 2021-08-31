import styled from "styled-components";
const PortfolioWrapper = styled.div`
  .portfolio .portfolio-item {
    margin-bottom: 30px;
  }

  .portfolio #portfolio-flters {
    padding: 0;
    margin: 0 auto 20px auto;
    list-style: none;
    text-align: center;
  }

  .portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 8px 16px 10px 16px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    color: #444444;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
    border-radius: 50px;
  }

  .portfolio #portfolio-flters li:hover,
  .portfolio #portfolio-flters li.filter-active {
    color: #fff;
    background: #34b7a7;
  }

  .portfolio #portfolio-flters li:last-child {
    margin-right: 0;
  }

  .portfolio .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: rgba(34, 34, 34, 0.6);
  }

  .portfolio .portfolio-wrap::before {
    content: "";
    background: rgba(34, 34, 34, 0.6);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }

  .portfolio .portfolio-wrap img {
    transition: all ease-in-out 0.3s;
  }

  .portfolio .portfolio-wrap .portfolio-info {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: all ease-in-out 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px;
  }

  .portfolio .portfolio-wrap .portfolio-info h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }

  .portfolio .portfolio-wrap .portfolio-info p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    font-style: italic;
  }

  .portfolio .portfolio-wrap .portfolio-links {
    text-align: center;
    z-index: 4;
  }

  .portfolio .portfolio-wrap .portfolio-links a {
    color: #fff;
    margin: 0 5px 0 0;
    font-size: 28px;
    display: inline-block;
    transition: 0.3s;
  }

  .portfolio .portfolio-wrap .portfolio-links a:hover {
    color: #78d9cd;
  }

  .portfolio .portfolio-wrap:hover::before {
    opacity: 1;
  }

  .portfolio .portfolio-wrap:hover img {
    transform: scale(1.2);
  }

  .portfolio .portfolio-wrap:hover .portfolio-info {
    opacity: 1;
  }

  /*--------------------------------------------------------------
                  # Portfolio Details
                  --------------------------------------------------------------*/
  .portfolio-details {
    padding-top: 0;
  }

  .portfolio-details .portfolio-details-slider img {
    width: 100%;
  }

  .portfolio-details .portfolio-details-slider .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }

  .portfolio-details
    .portfolio-details-slider
    .swiper-pagination
    .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid #34b7a7;
  }

  .portfolio-details
    .portfolio-details-slider
    .swiper-pagination
    .swiper-pagination-bullet-active {
    background-color: #34b7a7;
  }

  .portfolio-details .portfolio-info {
    padding: 30px;
    box-shadow: 0px 0 30px rgba(34, 34, 34, 0.08);
  }

  .portfolio-details .portfolio-info h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  .portfolio-details .portfolio-info ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
  }

  .portfolio-details .portfolio-info ul li + li {
    margin-top: 10px;
  }

  .portfolio-details .portfolio-description {
    padding-top: 30px;
  }

  .portfolio-details .portfolio-description h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .portfolio-details .portfolio-description p {
    padding: 0;
  }

  section {
    padding: 60px 0;
  }

  .section-bg {
    background-color: #e7f8f6;
  }

  .section-title {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-title h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
  }

  .section-title h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #34b7a7;
    bottom: 0;
    left: calc(50% - 25px);
  }

  .section-title p {
    margin-bottom: 0;
  }
`;
export default PortfolioWrapper;
