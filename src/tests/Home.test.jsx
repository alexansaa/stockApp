import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getActivesNames } from '../store/homeSlice';
import Home from '../components/home/Home';
import { MemoryRouter, Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import Details from '../components/details/Details';
import { createMemoryHistory } from 'history';

const mockStore = configureMockStore([thunk]);

const renderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  const store = mockStore({

  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </Provider>
  )

  // const Wrapper = ({ children }) => (
  //   <MemoryRouter initialEntries={[route]}>
  //     {children}
  //   </MemoryRouter>
  // );

  // return {
  //   ...render(ui, { wrapper: Wrapper }),
  //   history,
  // };
};

describe('Home component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should display loading state', async () => {
    const store = mockStore({ actives: { actives: [], isLoading: true, error: null } });

    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    store.dispatch(getActivesNames());
    
    expect(screen.getByText('Content Loading..!').textContent).toBe('Content Loading..!');
  });

  test('should display error state', async () => {
    const store = mockStore({ actives: { actives: [], isLoading: false, error: true } });

    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    store.dispatch(getActivesNames());

    expect(screen.getByText('Fetch Error! Something went wrong!').textContent).toBe('Fetch Error! Something went wrong!');
  })

  test('should display content', async () => {
    const { getByText } = renderWithRouter(
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    )



    const store = mockStore({
      actives: {
        actives: [
          {
            ticker: 'myTicker1',
            companyName: 'myCompanyName1',
            changes: 15.303,
            changesPercentage: '15.303',
            price: '0.0761',
          },
          {
            ticker: 'myTicker2',
            companyName: 'myCompanyName2',
            changes: 15.303,
            changesPercentage: '15.303',
            price: '0.0761',
          }
        ],
        isLoading: false,
        error: false,
        fetched: true,
        filterActive: [
          {
            ticker: 'myTicker1',
            companyName: 'myCompanyName1',
            changes: 15.303,
            changesPercentage: '15.303',
            price: '0.0761',
          },
          {
            ticker: 'myTicker2',
            companyName: 'myCompanyName2',
            changes: 15.303,
            changesPercentage: '15.303',
            price: '0.0761',
          }
        ],
      },
      details: {
        selectedReport: 'Income',
        companyName: 'myCompanyName1',
        ticker: 'myTicker1',
        period: -1,
        limit: -1,
        detailedIncome: [{
          date: '2022-09-30',
          cik: '0001731289',
          costAndExpenses: 799503000,
          costOfRevenue: 155582000,
          depreciationAndAmortization: 19426000,
        },
        ],
        detailedBalance: [],
        detailedCashFlow: [],
        isLoading: false,
        error: false,
      },
      layout: {
        PageName: 'Actives',
      }
    });

    const { activePage } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    store.dispatch(getActivesNames());

    await waitFor(() => {
      expect(activePage).toMatchSnapshot();
    })
  })
});
