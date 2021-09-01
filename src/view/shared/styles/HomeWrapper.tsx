import styled from "styled-components";
const HomeWrapper = styled.div`
  #hero {
    width: 100%;
    height: 100vh;
    background: url("../../../assets/img/hero-bg.jpg") top right;
    background-size: cover;
  }

  #hero .container {
    padding-top: 70px;
    position: relative;
  }

  @media (max-width: 992px) {
    #hero .container {
      padding-top: 58px;
    }
  }

  #hero h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #222222;
  }

  #hero h2 {
    color: #6f6f6f;
    margin: 10px 0 0 0;
    font-size: 22px;
  }

  #hero .btn-about {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    transition: 0.5s;
    margin-top: 30px;
    color: #fff;
    background: #6c3654;
  }

  #hero .btn-about:hover {
    background: #3dc8b7;
  }

  @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  }

  @media (max-width: 992px) {
    #hero:before {
      content: "";
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
    }
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
    #hero h2 {
      font-size: 18px;
      line-height: 24px;
    }
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
    background: #6c3654;
    bottom: 0;
    left: calc(50% - 25px);
  }

  .section-title p {
    margin-bottom: 0;
  }
`;
export default HomeWrapper;
