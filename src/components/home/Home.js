import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatementsNames } from '../../store/homeSlice';

import Income from './Income';
import CashFlow from './CashFlow';
import Balance from './Balance';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const rednerComponent = () => {
    if (selectedOption === 'Income') {
      return <Income />;
    }
    if (selectedOption === 'Balance') {
      return <Balance />;
    }
    if (selectedOption === 'CashFlow') {
      return <CashFlow />;
    }

    return null;
  };

  const dispatch = useDispatch();
  const {
    statements, isLoading, error, fetched, display,
  } = useSelector((store) => store.statement);

  useEffect(() => {
    if (!fetched) {
      dispatch(getStatementsNames());
    }
  }, []);

  const checkExists = (event) => {
    const checkName = event.target.value.toUpperCase();
    if (statements.includes(checkName)) {
      const namesList = document.querySelector('#nameList');
      const option = document.createElement('option');
      option.text = checkName;
      namesList.appendChild(option);
      namesList.value = checkName;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
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
          Type any statement
        </div>
        <input type="text" id="statementNames" name="statementNames" placeholder="Any statement" onChange={checkExists} />

        <div>
          Statement Names
        </div>
        <select id="nameList">
          {display.map((option) => (
            <option key={option} value={option}>
              {option}
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
      </div>
      {rednerComponent()}
      <div>
        <button type="button" onClick={onSubmit}>Submit Request</button>
      </div>
    </>
  );
};

export default Home;
