import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Filter from './Filter';
import ActivesList from './ActivesList';

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
  }, []);

  if (isLoading) {
    return <div> Content Loading..!</div>;
  }

  if (error) {
    return <div> Fetch Error! Something went wrong!</div>;
  }

  return (
    <div className={styles.look}>
      <Filter myActives={actives} />
      <ActivesList actives={filterActive} />
    </div>
  );
};

export default Home;
