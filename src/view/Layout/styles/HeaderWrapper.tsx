import styled from "styled-components";
const HeaderWrapper = styled.div`
  #header {
    background: #e9e8e6;
    box-shadow: 0px 0px 25px 0 rgba(0, 0, 0, 0.08);
    z-index: 997;
    padding: 9px 0;
  }

  #header .logo {
    font-size: 32px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  #header .logo a {
    color: #222222;
  }

  #header .logo img {
    max-height: 40px;
  }

  @media (max-width: 992px) {
    #header .logo {
      font-size: 28px;
    }
  }

  /*--------------------------------------------------------------
                  # Header Social Links
                  --------------------------------------------------------------*/
  .header-social-links {
    padding-right: 15px;
  }

  .header-social-links a {
    color: #6f6f6f;
    padding-left: 12px;
    display: inline-block;
    line-height: 0px;
    transition: 0.3s;
    font-size: 20px;
  }

  .header-social-links a:hover {
    color: #6c3654;
  }

  /*--------------------------------------------------------------
                  # Navigation Menu
                  --------------------------------------------------------------*/
  /**
                  * Desktop Navigation 
                  */
  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
    padding: 10px 0 10px 28px;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #888888;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar > ul > li > a:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #6c3654;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navbar a:hover:before,
  .navbar li:hover > a:before,
  .navbar .active:before {
    visibility: visible;
    width: 25px;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover > a {
    color: #222222;
  }

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 14px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
    padding: 0;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    font-weight: 600;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover > a {
    color: #6c3654;
  }

  .navbar .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }

  @media (max-width: 1366px) {
    .navbar .dropdown .dropdown ul {
      left: -90%;
    }
    .navbar .dropdown .dropdown:hover > ul {
      left: -100%;
    }
  }

  /**
                  * Mobile Navigation 
                  */
  .mobile-nav-toggle {
    color: #222222;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
  }

  .mobile-nav-toggle.bi-x {
    color: #fff;
  }

  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
    }
    .navbar ul {
      display: none;
    }
  }

  .navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(9, 9, 9, 0.9);
    transition: 0.3s;
    z-index: 999;
  }

  .navbar-mobile .mobile-nav-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .navbar-mobile ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    border-radius: 10px;
    background-color: #fff;
    overflow-y: auto;
    transition: 0.3s;
  }

  .navbar-mobile a {
    font-size: 15px;
    padding-right: 15px;
    color: #222222;
  }

  .navbar-mobile a:hover,
  .navbar-mobile .active,
  .navbar-mobile li:hover > a {
    color: #6c3654;
  }

  .navbar-mobile .getstarted {
    margin: 15px;
  }

  .navbar-mobile .dropdown ul {
    position: static;
    display: none;
    margin: 10px 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  }

  .navbar-mobile .dropdown ul li {
    min-width: 200px;
  }

  .navbar-mobile .dropdown ul a {
    padding: 10px 20px;
  }

  .navbar-mobile .dropdown ul a i {
    font-size: 12px;
  }

  .navbar-mobile .dropdown ul a:hover,
  .navbar-mobile .dropdown ul .active:hover,
  .navbar-mobile .dropdown ul li:hover > a {
    color: #6c3654;
  }

  .navbar-mobile .dropdown > .dropdown-active {
    display: block;
  }
  .back-to-top {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 996;
    background: #6c3654;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transition: all 0.4s;
  }

  .back-to-top i {
    font-size: 24px;
    color: #fff;
    line-height: 0;
  }

  .back-to-top:hover {
    background: #49cbbb;
    color: #fff;
  }

  .back-to-top.active {
    visibility: visible;
    opacity: 1;
  }
`;
export default HeaderWrapper;
