import PropTypes from 'prop-types';

const BalanceItems = ({
  date,
  accountPayables,
  capitalLeaseObligations,
  cashAndCashEquivalents,
  cashAndShortTermInvestments,
  commonStock,
  intangibleAssets,
  goodwill,
  longTermDebt,
  longTermInvestments,
  minorityInterest,
  totalAssets,
  totalDebt,
  totalEquity,
  totalInvestments,
  totalStockholdersEquity,
}) => (
  <>
    {date}
    {accountPayables}
    {capitalLeaseObligations}
    {cashAndCashEquivalents}
    {cashAndShortTermInvestments}
    {commonStock}
    {intangibleAssets}
    {goodwill}
    {longTermDebt}
    {longTermInvestments}
    {minorityInterest}
    {totalAssets}
    {totalDebt}
    {totalEquity}
    {totalInvestments}
    {totalStockholdersEquity}
  </>
);

BalanceItems.propTypes = {
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
};

export default BalanceItems;
