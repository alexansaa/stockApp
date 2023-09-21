import PropTypes from 'prop-types';

import IncomesItem from './IncomesItem';

import styles from '../../styles/IncomesList.module.css';

const IncomesList = ({ myIncomeList }) => (
  <div id="IncomeList">
    <div className={`${styles.title} ${styles.IbmFont} ${styles.white}`}>Statement List</div>
    <ul className={styles.look}>
      {myIncomeList.map((element) => (
        <li key={element.date}>
          <IncomesItem
            date={element.date}
            cik={element.cik}
            costAndExpenses={element.costAndExpenses}
            costOfRevenue={element.costOfRevenue}
            depreciationAndAmortization={element.depreciationAndAmortization}
            generalAndAdministrativeExpenses={element.generalAndAdministrativeExpenses}
            grossProfit={element.grossProfit}
            grossProfitRatio={element.grossProfitRatio}
          />
        </li>
      ))}
    </ul>
  </div>
);

IncomesList.propTypes = {
  myIncomeList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      cik: PropTypes.string.isRequired,
      costAndExpenses: PropTypes.number.isRequired,
      costOfRevenue: PropTypes.number.isRequired,
      depreciationAndAmortization: PropTypes.number.isRequired,
      generalAndAdministrativeExpenses: PropTypes.number.isRequired,
      grossProfit: PropTypes.number.isRequired,
      grossProfitRatio: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default IncomesList;
