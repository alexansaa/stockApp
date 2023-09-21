import PropTypes from 'prop-types';

import styles from '../../styles/DetailTitle.module.css';

const DetailTitle = ({
  companyName, ticker, period, limit,
}) => (
  <div className={styles.myActiveLook}>
    <h2>{companyName}</h2>
    {`(${ticker})`}
    <div className={styles.myActiveDetails}>
      <div>
        {period > -1 ? (
          <>
            Period:
            {` ${period}`}
          </>
        ) : (
          <>Period: All Periods</>
        )}
      </div>
      <div>
        {limit > -1 ? (
          <>
            Limit:
            {` ${limit}`}
          </>
        ) : (
          <>Limit: No Limit</>
        )}
      </div>
    </div>
  </div>
);

DetailTitle.propTypes = {
  companyName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  period: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default DetailTitle;
