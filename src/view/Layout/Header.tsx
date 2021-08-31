import React from "react";
import menue from "src/view/menue";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header id='header' className='fixed-top'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <h1 className='logo me-auto me-lg-0'>
          <a>Logo</a>
        </h1>
        <nav id='navbar' className='navbar order-last order-lg-0'>
          <ul>
            {menue.map((menue) => (
              <li key={menue.path}>
                <Link activeClassName={menue.class} to={`${menue.path}`}>
                  {menue.label}
                </Link>
              </li>
            ))}
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>

        <div className='header-social-links'>
          <a className='twitter'>
            <i className='bi bi-twitter'></i>
          </a>
          <a className='facebook'>
            <i className='bi bi-facebook'></i>
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
  );
}

export default Header;
