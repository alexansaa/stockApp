import PropTypes from 'prop-types';

const CashFlowItem = ({
  date,
  accountsPayables,
  accountsReceivables,
  acquisitionsNet,
  cashAtBeginningOfPeriod,
  cashAtEndOfPeriod,
  changeInWorkingCapital,
  commonStockIssued,
  commonStockRepurchased,
  debtRepayment,
  deferredIncomeTax,
  dividendsPaid,
  freeCashFlow,
  inventory,
  investmentsInPropertyPlantAndEquipment,
  netCashProvidedByOperatingActivities,
  netChangeInCash,
  netIncome,
  operatingCashFlow,
}) => (
  <>
    {date}
    {accountsPayables}
    {accountsReceivables}
    {acquisitionsNet}
    {cashAtBeginningOfPeriod}
    {cashAtEndOfPeriod}
    {changeInWorkingCapital}
    {commonStockIssued}
    {commonStockRepurchased}
    {debtRepayment}
    {deferredIncomeTax}
    {dividendsPaid}
    {freeCashFlow}
    {inventory}
    {investmentsInPropertyPlantAndEquipment}
    {netCashProvidedByOperatingActivities}
    {netChangeInCash}
    {netIncome}
    {operatingCashFlow}
  </>
);

CashFlowItem.propTypes = {
  date: PropTypes.string.isRequired,
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
};

export default CashFlowItem;
