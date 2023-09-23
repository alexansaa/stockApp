import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Filter from './Filter';
import ActivesList from './ActivesList';
import { setPageName } from '../../store/LayoutSlice';
import { getActivesNames } from '../../store/homeSlice';
import { setPeriod, setLimit } from '../../store/detailsSlice';

import styles from '../../styles/home.module.css';

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
    dispatch(setPeriod('-'));
    dispatch(setLimit('-'));
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
    </>
  );
};

export default Home;
