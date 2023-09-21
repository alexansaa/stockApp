import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCompanyName, setTicker } from '../../store/detailsSlice';

import styles from '../../styles/ActivitiesList.module.css';

import leftArrowCircle from '../../assets/leftarrowcircle.png';

const ActivesList = ({ actives }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemSubmit = (event) => {
    console.log('item click');
    const tmpItem = event.target;
    const tmpDetails = document.getElementById(`${tmpItem.id}-Title`);
    const myDetails = tmpDetails.textContent.match(/^(.*?)\s+\((.*?)\)$/);

    dispatch(setCompanyName(myDetails[1]));
    dispatch(setTicker(myDetails[2]));

    navigate('/details');
  };

  return (
    <div>
      <div className={`${styles.title} ${styles.IbmFont} ${styles.white}`}>Companies</div>
      <ul className={styles.elements}>
        {actives.map((element) => (
          <li key={element.ticker}>
            <button id={element.ticker} className={styles.itemDesc} onClick={itemSubmit} type="button">
              <h4 id={`${element.ticker}-Title`} className={`${styles.itemTitle} ${styles.white} ${styles.latoFont}`}>{`${element.companyName} (${element.ticker})`}</h4>
              <div className={styles.itemInfo}>
                <p className={`${styles.white} ${styles.IbmFont}`}>
                  Price:
                  {` ${element.price}`}
                </p>
                <p className={`${styles.white} ${styles.IbmFont}`}>
                  Changes %:
                  {` ${element.changesPercentage}`}
                </p>
              </div>
            </button>
            <img src={leftArrowCircle} alt="select item" className={styles.whiteImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ActivesList.propTypes = {
  actives: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      changes: PropTypes.number.isRequired,
      changesPercentage: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ActivesList;
