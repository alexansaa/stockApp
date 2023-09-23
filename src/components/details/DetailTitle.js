import PropTypes from 'prop-types';

import styles from '../../styles/DetailTitle.module.css';

const DetailTitle = ({
  companyName, ticker, period, limit, reportedCurrency,
}) => (
  <div className={styles.myActiveLook}>
    <h2>{companyName}</h2>
    {`(${ticker})`}
    <div>
      Reported Currency:
      {` ${reportedCurrency}`}
    </div>
    <div className={styles.myActiveDetails}>
      <div>
        {period !== '-' ? (
          <>
            Period:
            {` ${period}`}
          </>
        ) : (
          <>Period: All Periods</>
        )}
      </div>
      <div>
        {limit !== '-' ? (
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
  period: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  reportedCurrency: PropTypes.string.isRequired,
};

export default DetailTitle;
