import React from "react";
import menue from "src/view/menue";
import { Link, NavLink } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";
function Header(props) {
  return (
    <HeaderWrapper>
      <header id='header' className='fixed-top'>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <h1 className='logo me-auto me-lg-0'>
            <Link to={`/`}>Logo</Link>
          </h1>
          <nav id='navbar' className='navbar order-last order-lg-0'>
            <ul>
              {menue.map((menue) => (
                <li key={menue.path}>
                  <NavLink activeClassName={menue.class} to={`${menue.path}`}>
                    {menue.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>

          <div className='header-social-links'>
            <a className='twitter'>
              <i className='bi bi-discord'></i>
            </a>
            <a className='github'>
              <i className='bi bi-github'></i>
            </a>
            <a className='instagram'>
              <i className='bi bi-instagram'></i>
            </a>
            <a className='linkedin'>
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
