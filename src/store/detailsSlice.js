import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://financialmodelingprep.com/api/v3/';
// const apiKey = '?apikey=997aab514b57afa044984ff55c637aea';
const apiKey = '?apikey=6b95001963e6cd8dcebf69ae7bf0a25c';
// const symbolsEndPoint = 'financial-statement-symbol-lists';
const incomeEndPoint = 'income-statement/';
const balanceEndPoint = 'balance-sheet-statement/';
const cashFlowEndPoint = 'cash-flow-statement/';
const limitconstrain = '&limit=';
const periodconstrain = '&period=';

const initialState = {
  selectedReport: 'Income',
  companyName: '',
  ticker: '',
  period: -1,
  limit: -1,
  detailedIncome: [],
  detailedBalance: [],
  detailedCashFlow: [],
  isLoading: true,
  error: undefined,
};

export const getIncomesItems = createAsyncThunk('results/getIncomesItems', async (ticker, limit, period, thunkAPI) => {
  try {
    let getIncomesUrl = `${baseUrl}${incomeEndPoint}${ticker}${apiKey}`;
    if (limit > -1) {
      getIncomesUrl = `${getIncomesUrl}${limitconstrain}${limit}`;
    }
    if (period > -1) {
      getIncomesUrl = `${getIncomesUrl}${periodconstrain}${period}`;
    }
    const resp = await axios(getIncomesUrl);
    const myData = [];
    resp.data.forEach((element) => {
      const tmpIncome = {
        acceptedDate: element.acceptedDate,
        calendarYear: element.calendarYear,
        cik: element.cik,
        costAndExpenses: element.costAndExpenses,
        costOfRevenue: element.costOfRevenue,
        date: element.date,
        depreciationAndAmortization: element.depreciationAndAmortization,
        ebitda: element.ebitda,
        ebitdaratio: element.ebitdaratio,
        eps: element.eps,
        epsdiluted: element.epsdiluted,
        fillingDate: element.fillingDate,
        finalLink: element.finalLink,
        generalAndAdministrativeExpenses: element.generalAndAdministrativeExpenses,
        grossProfit: element.grossProfit,
        grossProfitRatio: element.grossProfitRatio,
        incomeBeforeTax: element.incomeBeforeTax,
        incomeBeforeTaxRatio: element.incomeBeforeTaxRatio,
        incomeTaxExpense: element.incomeTaxExpense,
        interestExpense: element.interestExpense,
        interestIncome: element.interestIncome,
        link: element.link,
        netIncome: element.netIncome,
        netIncomeRatio: element.netIncomeRatio,
        operatingExpenses: element.operatingExpenses,
        operatingIncome: element.operatingIncome,
        operatingIncomeRatio: element.operatingIncomeRatio,
        otherExpenses: element.otherExpenses,
        period: element.period,
        reportedCurrency: element.reportedCurrency,
        researchAndDevelopmentExpenses: element.researchAndDevelopmentExpenses,
        revenue: element.revenue,
        sellingAndMarketingExpenses: element.sellingAndMarketingExpenses,
        sellingGeneralAndAdministrativeExpenses: element.sellingGeneralAndAdministrativeExpenses,
        symbol: element.symbol,
        totalOtherIncomeExpensesNet: element.totalOtherIncomeExpensesNet,
        weightedAverageShsOut: element.weightedAverageShsOut,
        weightedAverageShsOutDil: element.weightedAverageShsOutDil,
      };
      myData.push(tmpIncome);
    });
    return myData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

export const getBalanceItems = createAsyncThunk('results/getBalanceItems', async (ticker, limit, period, thunkAPI) => {
  try {
    let getBalanceUrl = `${baseUrl}${balanceEndPoint}${ticker}${apiKey}`;
    if (limit > -1) {
      getBalanceUrl = `${getBalanceUrl}${limitconstrain}${limit}`;
    }
    if (period > -1) {
      getBalanceUrl = `${getBalanceUrl}${periodconstrain}${period}`;
    }
    const resp = await axios(getBalanceUrl);
    const myData = [];
    resp.data.forEach((element) => {
      const tmpBalance = {
        acceptedDate: element.acceptedDate,
        accountPayables: element.accountPayables,
        accumulatedOtherComprehensiveIncomeLoss: element.accumulatedOtherComprehensiveIncomeLoss,
        calendarYear: element.calendarYear,
        capitalLeaseObligations: element.capitalLeaseObligations,
        cashAndCashEquivalents: element.cashAndCashEquivalents,
        cashAndShortTermInvestments: element.cashAndShortTermInvestments,
        cik: element.cik,
        commonStock: element.commonStock,
        date: element.date,
        deferredRevenue: element.deferredRevenue,
        deferredRevenueNonCurrent: element.deferredRevenueNonCurrent,
        deferredTaxLiabilitiesNonCurrent: element.deferredTaxLiabilitiesNonCurrent,
        fillingDate: element.fillingDate,
        finalLink: element.finalLink,
        goodwill: element.goodwill,
        goodwillAndIntangibleAssets: element.goodwillAndIntangibleAssets,
        intangibleAssets: element.intangibleAssets,
        inventory: element.inventory,
        link: element.link,
        longTermDebt: element.longTermDebt,
        longTermInvestments: element.longTermInvestments,
        minorityInterest: element.minorityInterest,
        netDebt: element.netDebt,
        netReceivables: element.netReceivables,
        otherAssets: element.otherAssets,
        otherCurrentAssets: element.otherCurrentAssets,
        otherCurrentLiabilities: element.otherCurrentLiabilities,
        otherLiabilities: element.otherLiabilities,
        otherNonCurrentAssets: element.otherNonCurrentAssets,
        otherNonCurrentLiabilities: element.otherNonCurrentLiabilities,
        othertotalStockholdersEquity: element.othertotalStockholdersEquity,
        period: element.period,
        preferredStock: element.preferredStock,
        propertyPlantEquipmentNet: element.propertyPlantEquipmentNet,
        reportedCurrency: element.reportedCurrency,
        retainedEarnings: element.retainedEarnings,
        shortTermDebt: element.shortTermDebt,
        shortTermInvestments: element.shortTermInvestments,
        symbol: element.symbol,
        taxAssets: element.taxAssets,
        taxPayables: element.taxPayables,
        totalAssets: element.totalAssets,
        totalCurrentAssets: element.totalCurrentAssets,
        totalCurrentLiabilities: element.totalCurrentLiabilities,
        totalDebt: element.totalDebt,
        totalEquity: element.totalEquity,
        totalInvestments: element.totalInvestments,
        totalLiabilities: element.totalLiabilities,
        totalLiabilitiesAndStockholdersEquity: element.totalLiabilitiesAndStockholdersEquity,
        totalLiabilitiesAndTotalEquity: element.totalLiabilitiesAndTotalEquity,
        totalNonCurrentAssets: element.totalNonCurrentAssets,
        totalNonCurrentLiabilities: element.totalNonCurrentLiabilities,
        totalStockholdersEquity: element.totalStockholdersEquity,
      };
      myData.push(tmpBalance);
    });
    return myData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

export const getCashFlowItems = createAsyncThunk('results/getCashFlowItems', async (ticker, limit, period, thunkAPI) => {
  try {
    let getCashFlowUrl = `${baseUrl}${cashFlowEndPoint}${ticker}${apiKey}`;
    if (limit > -1) {
      getCashFlowUrl = `${getCashFlowUrl}${limitconstrain}${limit}`;
    }
    if (period > -1) {
      getCashFlowUrl = `${getCashFlowUrl}${periodconstrain}${period}`;
    }
    const resp = await axios(getCashFlowUrl);
    const myData = [];
    resp.data.forEach((element) => {
      const tmpCashFlow = {
        acceptedDate: element.acceptedDate,
        accountsPayables: element.accountsPayables,
        accountsReceivables: element.accountsReceivables,
        acquisitionsNet: element.acquisitionsNet,
        calendarYear: element.calendarYear,
        capitalExpenditure: element.capitalExpenditure,
        cashAtBeginningOfPeriod: element.cashAtBeginningOfPeriod,
        cashAtEndOfPeriod: element.cashAtEndOfPeriod,
        changeInWorkingCapital: element.changeInWorkingCapital,
        cik: element.cik,
        commonStockIssued: element.commonStockIssued,
        commonStockRepurchased: element.commonStockRepurchased,
        date: element.date,
        debtRepayment: element.debtRepayment,
        deferredIncomeTax: element.deferredIncomeTax,
        depreciationAndAmortization: element.depreciationAndAmortization,
        dividendsPaid: element.dividendsPaid,
        effectOfForexChangesOnCash: element.effectOfForexChangesOnCash,
        fillingDate: element.fillingDate,
        finalLink: element.finalLink,
        freeCashFlow: element.freeCashFlow,
        inventory: element.inventory,
        investmentsInPropertyPlantAndEquipment: element.investmentsInPropertyPlantAndEquipment,
        link: element.link,
        netCashProvidedByOperatingActivities: element.netCashProvidedByOperatingActivities,
        netCashUsedForInvestingActivites: element.netCashUsedForInvestingActivites,
        netCashUsedProvidedByFinancingActivities: element.netCashUsedProvidedByFinancingActivities,
        netChangeInCash: element.netChangeInCash,
        netIncome: element.netIncome,
        operatingCashFlow: element.operatingCashFlow,
        otherFinancingActivites: element.otherFinancingActivites,
        otherInvestingActivites: element.otherInvestingActivites,
        otherNonCashItems: element.otherNonCashItems,
        otherWorkingCapital: element.otherWorkingCapital,
        period: element.period,
        purchasesOfInvestments: element.purchasesOfInvestments,
        reportedCurrency: element.reportedCurrency,
        salesMaturitiesOfInvestments: element.salesMaturitiesOfInvestments,
        stockBasedCompensation: element.stockBasedCompensation,
        symbol: element.symbol,
      };
      myData.push(tmpCashFlow);
    });
    return myData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.selectedReport = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setTicker: (state, action) => {
      state.ticker = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: {
    [getIncomesItems.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getIncomesItems.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getIncomesItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.detailedIncome = action.payload;
    },
    [getBalanceItems.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getBalanceItems.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getBalanceItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.detailedBalance = action.payload;
    },
    [getCashFlowItems.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getCashFlowItems.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getCashFlowItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.detailedCashFlow = action.payload;
    },
  },
});

export const {
  setDetail, setCompanyName, setPeriod, setLimit, setTicker,
} = detailsSlice.actions;
export default detailsSlice.reducer;
