import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { NavLink } from 'react-router-dom';

import backBtn from '../assets/back.png';
import styles from '../styles/Navbar.module.css';

const link = [
  {
    path: '/', text: 'back',
  },
];

const Navbar = () => {
  const { PageName } = useSelector((store) => store.layout);

  return (
    <nav>
      <div className={styles.look}>
        <img src={backBtn} alt={link.text} className={styles.whiteArrow} />
        <h1>{PageName}</h1>
      </div>
    </nav>
  );
};

export default Navbar;
