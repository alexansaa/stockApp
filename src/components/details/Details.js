import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIncomesItems, getBalanceItems, getCashFlowItems } from '../../store/detailsSlice';
import { setPageName } from '../../store/LayoutSlice';

import DetailTitle from './DetailTitle';
import IncomeList from './IncomesList';
import BalanceList from './BalanceList';
import CashFlowList from './CashFlowList';

import styles from '../../styles/Details.module.css';

const Details = () => {
  const dispatch = useDispatch();

  const {
    selectedReport,
    companyName,
    ticker,
    period,
    limit,
    reportedCurrency,
    detailedIncome,
    detailedBalance,
    detailedCashFlow,
    isLoading,
    error,
  } = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(setPageName(`${selectedReport} Report`));

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
    return <div>Content Loading..!</div>;
  }

  if (error) {
    return <div>Fetch Error! Something went wrong!</div>;
  }

  if (selectedReport === 'Income') {
    return (
      <div className={`${styles.look} ${styles.latoFont}`}>
        <DetailTitle
          companyName={companyName}
          ticker={ticker}
          period={period}
          limit={limit}
          reportedCurrency={reportedCurrency}
        />
        <IncomeList myIncomeList={detailedIncome} />
      </div>
    );
  }

  if (selectedReport === 'Balance') {
    return (
      <div className={`${styles.look} ${styles.latoFont}`}>
        <DetailTitle
          companyName={companyName}
          ticker={ticker}
          period={period}
          limit={limit}
          reportedCurrency={reportedCurrency}
        />
        <BalanceList myBalanceList={detailedBalance} />
      </div>
    );
  }

  if (selectedReport === 'CashFlow') {
    return (
      <div className={`${styles.look} ${styles.latoFont}`}>
        <DetailTitle
          companyName={companyName}
          ticker={ticker}
          period={period}
          limit={limit}
          reportedCurrency={reportedCurrency}
        />
        <CashFlowList myCashFlowList={detailedCashFlow} />
      </div>
    );
  }

  return (
    <div>data retrieved succesufully!</div>
  );
};

export default Details;
