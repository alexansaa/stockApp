import PropTypes from 'prop-types';

import styles from '../../styles/CashFlowItems.module.css';

const CashFlowItem = ({
  date,
  accountsPayables,
  accountsReceivables,
  acquisitionsNet,
  cashAtBeginningOfPeriod,
  cashAtEndOfPeriod,
}) => (
  <div className={`${styles.look} ${styles.white}`}>
    <div>
      Date:
      {` ${date}`}
    </div>
    <div>
      Accounts Payables:
      {` ${accountsPayables}`}
    </div>
    <div>
      Accounts Receivables:
      {` ${accountsReceivables}`}
    </div>
    <div>
      Acquisitions Net:
      {` ${acquisitionsNet}`}
    </div>
    <div>
      Cash At Beginning Of Period:
      {` ${cashAtBeginningOfPeriod}`}
    </div>
    <div>
      Cash At End Of Period:
      {` ${cashAtEndOfPeriod}`}
    </div>
  </div>
);

CashFlowItem.propTypes = {
  date: PropTypes.string.isRequired,
  accountsPayables: PropTypes.number.isRequired,
  accountsReceivables: PropTypes.number.isRequired,
  acquisitionsNet: PropTypes.number.isRequired,
  cashAtBeginningOfPeriod: PropTypes.number.isRequired,
  cashAtEndOfPeriod: PropTypes.number.isRequired,
};

export default CashFlowItem;
