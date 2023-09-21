import PropTypes from 'prop-types';

import styles from '../../styles/IncomesItems.module.css';

const IncomesItem = ({
  date,
  cik,
  costAndExpenses,
  costOfRevenue,
  depreciationAndAmortization,
  generalAndAdministrativeExpenses,
  grossProfit,
  grossProfitRatio,
}) => (
  <div className={styles.look}>
    <div>
      Date:
      {date}
    </div>
    <div>
      CIK:
      {cik}
    </div>
    <div>
      Cost & Expenses:
      {costAndExpenses}
    </div>
    <div>
      Cost of Revenue:
      {costOfRevenue}
    </div>
    <div>
      Deprecation & Amortization:
      {depreciationAndAmortization}
    </div>
    <div>
      General & Administrative Exprenses:
      {generalAndAdministrativeExpenses}
    </div>
    <div>
      Gross Profit:
      {grossProfit}
    </div>
    <div>
      Gross Profit Ratio:
      {grossProfitRatio}
    </div>
  </div>
);

IncomesItem.propTypes = {
  date: PropTypes.string.isRequired,
  cik: PropTypes.string.isRequired,
  costAndExpenses: PropTypes.number.isRequired,
  costOfRevenue: PropTypes.number.isRequired,
  depreciationAndAmortization: PropTypes.number.isRequired,
  generalAndAdministrativeExpenses: PropTypes.number.isRequired,
  grossProfit: PropTypes.number.isRequired,
  grossProfitRatio: PropTypes.number.isRequired,
};

export default IncomesItem;
