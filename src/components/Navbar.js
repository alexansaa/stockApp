import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home'},
];

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <h1>Financial Freedom!</h1>
        </div>
        <div>
          <ul>
            {links.map((link) => (
              <React.Fragment key={link.text}>
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </nav> 
  )
};

export default Navbar;
