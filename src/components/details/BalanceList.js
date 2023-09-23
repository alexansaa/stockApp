import PropTypes from 'prop-types';
import BalanceItems from './BalanceItem';

import styles from '../../styles/BalanceList.module.css';

const BalanceList = ({ myBalanceList }) => (
  <div id="BalanceList">
    <div className={`${styles.title} ${styles.IbmFont} ${styles.white}`}>Statement List</div>
    <ul className={styles.look}>
      {myBalanceList.map((element) => (
        <li key={element.date}>
          <BalanceItems
            date={element.date}
            accountPayables={element.accountPayables}
            capitalLeaseObligations={element.capitalLeaseObligations}
            cashAndCashEquivalents={element.cashAndCashEquivalents}
            cashAndShortTermInvestments={element.cashAndShortTermInvestments}
            commonStock={element.commonStock}
            intangibleAssets={element.intangibleAssets}
            goodwill={element.goodwill}
            longTermDebt={element.longTermDebt}
            longTermInvestments={element.longTermInvestments}
            minorityInterest={element.minorityInterest}
            totalAssets={element.totalAssets}
            totalDebt={element.totalDebt}
            totalEquity={element.totalEquity}
            totalInvestments={element.totalInvestments}
            totalStockholdersEquity={element.totalStockholdersEquity}
          />
        </li>
      ))}
    </ul>
  </div>
);

BalanceList.propTypes = {
  myBalanceList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      accountPayables: PropTypes.number.isRequired,
      capitalLeaseObligations: PropTypes.number.isRequired,
      cashAndCashEquivalents: PropTypes.number.isRequired,
      cashAndShortTermInvestments: PropTypes.number.isRequired,
      commonStock: PropTypes.number.isRequired,
      intangibleAssets: PropTypes.number.isRequired,
      goodwill: PropTypes.number.isRequired,
      longTermDebt: PropTypes.number.isRequired,
      longTermInvestments: PropTypes.number.isRequired,
      minorityInterest: PropTypes.number.isRequired,
      totalAssets: PropTypes.number.isRequired,
      totalDebt: PropTypes.number.isRequired,
      totalEquity: PropTypes.number.isRequired,
      totalInvestments: PropTypes.number.isRequired,
      totalStockholdersEquity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BalanceList;
