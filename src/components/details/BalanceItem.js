import PropTypes from 'prop-types';

import styles from '../../styles/BalanceItem.module.css';

const BalanceItems = ({
  date,
  accountPayables,
  capitalLeaseObligations,
  cashAndCashEquivalents,
  cashAndShortTermInvestments,
  commonStock,
}) => (
  <div className={`${styles.look} ${styles.white}`}>
    <div>
      Date:
      {` ${date}`}
    </div>
    <div>
      Account Payables:
      {` ${accountPayables}`}
    </div>
    <div>
      Capital Lease Obligations:
      {` ${capitalLeaseObligations}`}
    </div>
    <div>
      Cash & Cash Equivalents:
      {` ${cashAndCashEquivalents}`}
    </div>
    <div>
      Cash & Short Term Investments:
      {` ${cashAndShortTermInvestments}`}
    </div>
    <div>
      Common Stock:
      {` ${commonStock}`}
    </div>
  </div>
);

BalanceItems.propTypes = {
  date: PropTypes.string.isRequired,
  accountPayables: PropTypes.number.isRequired,
  capitalLeaseObligations: PropTypes.number.isRequired,
  cashAndCashEquivalents: PropTypes.number.isRequired,
  cashAndShortTermInvestments: PropTypes.number.isRequired,
  commonStock: PropTypes.number.isRequired,
};

export default BalanceItems;
