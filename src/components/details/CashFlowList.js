import PropTypes from 'prop-types';

import CashFlowItem from './CashFlowItem';

import styles from '../../styles/CashFlowList.module.css';

const CashFlowList = ({ myCashFlowList }) => (
  <div id="CashFlowList">
    <div className={`${styles.title} ${styles.IbmFont} ${styles.white}`}>Statement List</div>
    <ul className={styles.look}>
      {myCashFlowList.map((element) => (
        <li key={element.date}>
          <CashFlowItem
            date={element.date}
            accountsPayables={element.accountsPayables}
            accountsReceivables={element.accountsReceivables}
            acquisitionsNet={element.acquisitionsNet}
            cashAtBeginningOfPeriod={element.cashAtBeginningOfPeriod}
            cashAtEndOfPeriod={element.cashAtEndOfPeriod}
            changeInWorkingCapital={element.changeInWorkingCapital}
            commonStockIssued={element.commonStockIssued}
            commonStockRepurchased={element.commonStockRepurchased}
            debtRepayment={element.debtRepayment}
            deferredIncomeTax={element.deferredIncomeTax}
            dividendsPaid={element.dividendsPaid}
            freeCashFlow={element.freeCashFlow}
            inventory={element.inventory}
            investmentsInPropertyPlantAndEquipment={
              element.investmentsInPropertyPlantAndEquipment
            }
            netCashProvidedByOperatingActivities={element.netCashProvidedByOperatingActivities}
            netChangeInCash={element.netChangeInCash}
            netIncome={element.netIncome}
            operatingCashFlow={element.operatingCashFlow}
          />
        </li>
      ))}
    </ul>
  </div>
);

CashFlowList.propTypes = {
  myCashFlowList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      accountsPayables: PropTypes.number.isRequired,
      accountsReceivables: PropTypes.number.isRequired,
      acquisitionsNet: PropTypes.number.isRequired,
      cashAtBeginningOfPeriod: PropTypes.number.isRequired,
      cashAtEndOfPeriod: PropTypes.number.isRequired,
      changeInWorkingCapital: PropTypes.number.isRequired,
      commonStockIssued: PropTypes.number.isRequired,
      commonStockRepurchased: PropTypes.number.isRequired,
      debtRepayment: PropTypes.number.isRequired,
      deferredIncomeTax: PropTypes.number.isRequired,
      dividendsPaid: PropTypes.number.isRequired,
      freeCashFlow: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      investmentsInPropertyPlantAndEquipment: PropTypes.number.isRequired,
      netCashProvidedByOperatingActivities: PropTypes.number.isRequired,
      netChangeInCash: PropTypes.number.isRequired,
      netIncome: PropTypes.number.isRequired,
      operatingCashFlow: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CashFlowList;
