import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import backBtn from '../assets/back.png';
import gearBtn from '../assets/gear.png';
import micBtn from '../assets/mic.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const { PageName } = useSelector((store) => store.layout);

  const homeNavigation = () => {
    navigate('/');
  };

  return (
    <nav>
      <div className={styles.look}>
        <div className={styles.aligned}>
          <button type="button" onClick={homeNavigation} className={styles.backBtn}>
            <img src={backBtn} alt="back button" className={styles.whiteImage} />
          </button>
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
