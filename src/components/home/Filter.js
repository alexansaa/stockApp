import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setDetail, setCompanyName, setPeriod, setLimit, setTicker,
} from '../../store/detailsSlice';
import { setFilteredActive } from '../../store/homeSlice';

import styles from '../../styles/Filter.module.css';

const Filter = ({ actives }) => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);
  const [advanceFilter, setAdvanceFilter] = useState(false);

  const {
    selectedReport,
  } = useSelector((store) => store.details);

  useEffect(() => {
    setSelectedOption(selectedReport);
  }, []);

  const navigate = useNavigate();

  const nameListChange = (event) => {
    const myActive = actives.filter((activ) => activ.companyName === event.target.value);
    dispatch(setCompanyName(myActive[0].companyName));
    dispatch(setTicker(myActive[0].ticker));
    dispatch(setFilteredActive([myActive[0]]));
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
      AdvanceFilter.style.display = 'flex';
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

  return (
    <div className={styles.look}>
      <h1 className={`${styles.title} ${styles.white} ${styles.LatoFont}`}>Financial Freedom</h1>
      <div className={styles.lookPadd}>
        <div className={`${styles.IbmFont} ${styles.white}`}>
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
      <div className={styles.lookFilt}>
        <div className={`${styles.IbmFont} ${styles.white}`}>
          Select Report Type
        </div>
        <form>
          <label htmlFor="income" className={`${styles.IbmFont} ${styles.white}`}>
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
          <label htmlFor="balance" className={`${styles.IbmFont} ${styles.white}`}>
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
          <label htmlFor="cashFlow" className={`${styles.IbmFont} ${styles.white}`}>
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
        <button type="button" onClick={handleAdvanceFilter} className={styles.blackBtn}>Advance Filter</button>
        <div id="AdvanceFilter" className={styles.hidden}>
          <div>
            <div className={`${styles.IbmFont} ${styles.white}`}>
              Select a period
            </div>
            <select id="periodList" onChange={periodChange} defaultValue="-">
              <option value="-" disabled>-</option>
              <option key="quarter">Quarter</option>
              <option key="annual">Annual</option>
            </select>
          </div>
          <div>
            <div className={`${styles.IbmFont} ${styles.white}`}>
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
      <div className={styles.center}>
        <button type="button" onClick={onSubmit} className={styles.blackBtn}>Submit Request</button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  actives: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      changes: PropTypes.number.isRequired,
      changesPercentage: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Filter;
