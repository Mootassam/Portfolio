import React from "react";
import menue from "src/view/menue";
import { Link, NavLink } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
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
            <a
              className='twitter'
              href='https://discord.com/channels/828322049251999755/865254856595603466'
              target='_blank'>
              <FaDiscord />
            </a>
            <a
              className='github'
              href='https://github.com/Mootassam'
              target='_blank'>
              <FaGithub />
            </a>
            <a
              className='linkedin'
              href='https://www.linkedin.com/in/mootassam-boughdiri-06588b196/'
              target='_blank'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
