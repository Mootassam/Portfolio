import styled from "styled-components";
const ServiceWrapper = styled.div`
  .services .icon-box {
    text-align: center;
    padding: 70px 20px 80px 20px;
    transition: all ease-in-out 0.3s;
    background: #fff;
    box-shadow: 0px 0 35px 0 rgba(0, 0, 0, 0.08);
  }

  .services .icon-box .icon {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.3s;
    position: relative;
  }

  .services .icon-box .icon i {
    font-size: 36px;
    transition: 0.5s;
    position: relative;
  }

  .services .icon-box .icon svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .services .icon-box .icon svg path {
    transition: 0.5s;
    fill: #f5f5f5;
  }

  .services .icon-box h4 {
    font-weight: 600;
    margin: 10px 0 15px 0;
    font-size: 22px;
  }

  .services .icon-box h4 a {
    color: #222222;
    transition: ease-in-out 0.3s;
  }

  .services .icon-box p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }

  .services .iconbox-blue i {
    color: #47aeff;
  }

  .services .iconbox-blue:hover .icon i {
    color: #fff;
  }

  .services .iconbox-blue:hover .icon path {
    fill: #47aeff;
  }

  .services .iconbox-orange i {
    color: #ffa76e;
  }

  .services .iconbox-orange:hover .icon i {
    color: #fff;
  }

  .services .iconbox-orange:hover .icon path {
    fill: #ffa76e;
  }

  .services .iconbox-pink i {
    color: #e80368;
  }

  .services .iconbox-pink:hover .icon i {
    color: #fff;
  }

  .services .iconbox-pink:hover .icon path {
    fill: #e80368;
  }

  .services .iconbox-yellow i {
    color: #ffbb2c;
  }

  .services .iconbox-yellow:hover .icon i {
    color: #fff;
  }

  .services .iconbox-yellow:hover .icon path {
    fill: #ffbb2c;
  }

  .services .iconbox-red i {
    color: #ff5828;
  }

  .services .iconbox-red:hover .icon i {
    color: #fff;
  }

  .services .iconbox-red:hover .icon path {
    fill: #ff5828;
  }

  .services .iconbox-teal i {
    color: #11dbcf;
  }

  .services .iconbox-teal:hover .icon i {
    color: #fff;
  }

  .services .iconbox-teal:hover .icon path {
    fill: #11dbcf;
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
    background: #795548;
    bottom: 0;
    left: calc(50% - 25px);
  }

  .section-title p {
    margin-bottom: 0;
  }
`;
export default ServiceWrapper;
