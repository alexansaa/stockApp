import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIncomesItems, getBalanceItems, getCashFlowItems } from '../../store/detailsSlice';

import IncomesItem from './IncomesItem';
import BalanceItem from './BalanceItem';
import CashFlow from './CashFlowItem';

const Details = () => {
  const dispatch = useDispatch();
  const {
    selectedReport,
    companyName,
    ticker,
    period,
    limit,
    detailedIncome,
    detailedBalance,
    detailedCashFlow,
    isLoading,
    error,
  } = useSelector((store) => store.details);

  useEffect(() => {
    if (selectedReport === 'Income') {
      dispatch(getIncomesItems(ticker, limit, period));
    }
    if (selectedReport === 'Balance') {
      dispatch(getBalanceItems(ticker, limit, period));
    }
    if (selectedReport === 'CashFlow') {
      dispatch(getCashFlowItems(ticker, limit, period));
    }
  }, []);

  if (isLoading) {
    return <div> Content Loading..!</div>;
  }

  if (error) {
    return <div> Fetch Error! Something went wrong!</div>;
  }

  if (selectedReport === 'Income') {
    return (
      <>
        {companyName}
        {ticker}
        <ul>
          {detailedIncome.map((element) => (
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
      </>
    );
  }

  if (selectedReport === 'Balance') {
    return (
      <>
        {companyName}
        {ticker}
        <ul>
          {detailedBalance.map((element) => (
            <li key={element.date}>
              <BalanceItem
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
      </>
    );
  }

  if (selectedReport === 'CashFlow') {
    return (
      <>
        {companyName}
        {ticker}
        <ul>
          {detailedCashFlow.map((element) => (
            <li key={element.date}>
              <CashFlow
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
      </>
    );
  }

  return (
    <div>data retrieved succesufully!</div>
  );
};

export default Details;
