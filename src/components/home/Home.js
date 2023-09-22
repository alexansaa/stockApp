import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Filter from './Filter';
import ActivesList from './ActivesList';
import { setPageName } from '../../store/LayoutSlice';
import { getActivesNames } from '../../store/homeSlice';

import styles from '../../styles/Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const {
    actives, isLoading, error, fetched, filterActive,
  } = useSelector((store) => store.actives);

  useEffect(() => {
    if (!fetched) {
      dispatch(getActivesNames());
    }
    dispatch(setPageName('Actives'));
  }, []);

  if (isLoading) {
    return <div>Content Loading..!</div>;
  }

  if (error) {
    return <div>Fetch Error! Something went wrong!</div>;
  }

  return (
    <>
      <div className={styles.look}>
        <Filter myActives={actives} />
        <ActivesList actives={filterActive} />
      </div>
      <div>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          <img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
        </a>
        <br />
        Este obra está bajo una
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          licencia de Creative Commons Reconocimiento-NoComercial 4.0 Internacional
        </a>
      </div>
    </>
  );
};

export default Home;
