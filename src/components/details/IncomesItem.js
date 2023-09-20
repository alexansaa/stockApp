import PropTypes from 'prop-types';

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
  <>
    {date}
    {cik}
    {costAndExpenses}
    {costOfRevenue}
    {depreciationAndAmortization}
    {generalAndAdministrativeExpenses}
    {grossProfit}
    {grossProfitRatio}
  </>
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
