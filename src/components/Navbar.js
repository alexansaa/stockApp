import React from 'react';
import { NavLink } from 'react-router-dom';
import backBtn from '../assets/back.png';

const links = [
  { path: '/', text: 'back', src: backBtn },
];

const Navbar = () => (
  <nav>
    <div>
      <div>
        <h1>Financial Freedom!</h1>
      </div>
      <div>
        <ul>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <NavLink to={link.path}>
                <img src={link.src} alt={link.text} />
              </NavLink>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
