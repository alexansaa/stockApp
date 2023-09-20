import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getActivesNames } from '../../store/homeSlice';
import {
  setDetail, setCompanyName, setPeriod, setLimit, setTicker,
} from '../../store/detailsSlice';

import styles from '../../styles/home.module.css';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [advanceFilter, setAdvanceFilter] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    actives, isLoading, error, fetched,
  } = useSelector((store) => store.actives);

  const {
    selectedReport,
  } = useSelector((store) => store.details);

  useEffect(() => {
    setSelectedOption(selectedReport);
    if (!fetched) {
      dispatch(getActivesNames());
    }
  }, []);

  const nameListChange = (event) => {
    const myActive = actives.filter((activ) => activ.companyName === event.target.value);
    dispatch(setCompanyName(myActive[0].companyName));
    dispatch(setTicker(myActive[0].ticker));
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(setDetail(event.target.value));
  };

  const ToggleFilter = () => {
    const AdvanceFilter = document.querySelector('#AdvanceFilter');
    if (advanceFilter) {
      AdvanceFilter.style.display = 'none';
    } else {
      AdvanceFilter.style.display = 'block';
    }
  };

  const handleAdvanceFilter = () => {
    setAdvanceFilter(!advanceFilter);
    ToggleFilter();
  };

  const periodChange = (event) => {
    dispatch(setPeriod(event.target.value));
  };

  const handleLimitValue = (event) => {
    dispatch(setLimit(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const companyName = document.querySelector('#nameList').value;
    if (companyName === '-') {
      alert('Select a valid Company Name');
    } else {
      navigate('/details');
    }
  };

  if (isLoading) {
    return <div> Content Loading..!</div>;
  }

  if (error) {
    return <div> Fetch Error! Something went wrong!</div>;
  }

  return (
    <>
      <div>
        <div>
          Company Names
        </div>
        <select id="nameList" onChange={nameListChange} defaultValue="-">
          <option value="-" disabled>-</option>
          {actives.map((active) => (
            <option key={active.companyName} value={active.companyName}>
              {active.companyName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          Select Report Type
        </div>
        <form>
          <label htmlFor="income">
            <input
              type="radio"
              id="income"
              name="income"
              value="Income"
              onChange={handleRadioChange}
              checked={selectedOption === 'Income'}
            />
            Income
          </label>
          <label htmlFor="balance">
            <input
              type="radio"
              id="balance"
              name="balance"
              value="Balance"
              onChange={handleRadioChange}
              checked={selectedOption === 'Balance'}
            />
            Balance Sheet
          </label>
          <label htmlFor="cashFlow">
            <input
              type="radio"
              id="cashFlow"
              name="cashFlow"
              value="CashFlow"
              onChange={handleRadioChange}
              checked={selectedOption === 'CashFlow'}
            />
            Cash Flow
          </label>
        </form>
        <button type="button" onClick={handleAdvanceFilter}>Advance Filter</button>
        <div id="AdvanceFilter" className={styles.hidden}>
          <div>
            <div>
              Select a period
            </div>
            <select id="periodList" onChange={periodChange} defaultValue="-">
              <option value="-" disabled>-</option>
              <option key="quarter">Quarter</option>
              <option key="annual">Annual</option>
            </select>
          </div>
          <div>
            <div>
              Select a limit
            </div>
            <select id="limit" onChange={handleLimitValue} defaultValue="-">
              <option value="-" disabled>-</option>
              <option key="120">120</option>
              <option key="400">400</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button type="button" onClick={onSubmit}>Submit Request</button>
      </div>
    </>
  );
};

export default Home;
