import styled from "styled-components";
const ContentWrapper = styled.div`
  body {
    font-family: "Open Sans", sans-serif;
    color: #444444;
  }

  a {
    color: #34b7a7;
    text-decoration: none;
  }

  a:hover {
    color: #51cdbe;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway", sans-serif;
  }

  #main {
    margin-top: 50px;
  }

  @media (max-width: 992px) {
    #main {
      margin-top: 30px;
    }
  }

  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: #fff;
  }

  #preloader:before {
    content: "";
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid #34b7a7;
    border-top-color: #dcf5f2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    -webkit-animation: animate-preloader 1s linear infinite;
    animation: animate-preloader 1s linear infinite;
  }

  @-webkit-keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default ContentWrapper;
