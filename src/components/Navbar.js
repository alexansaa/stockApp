import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { NavLink } from 'react-router-dom';

import backBtn from '../assets/back.png';
import gearBtn from '../assets/gear.png';
import micBtn from '../assets/mic.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { PageName } = useSelector((store) => store.layout);

  return (
    <nav>
      <div className={styles.look}>
        <div className={styles.aligned}>
          <img src={backBtn} alt="back button" className={styles.whiteImage} />
          <h1>{PageName}</h1>
        </div>
        <div className={styles.aligned}>
          <img src={micBtn} alt="mic button" className={`${styles.whiteImage} ${styles.options}`} />
          <img src={gearBtn} alt="settings button" className={`${styles.whiteImage} ${styles.options}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
