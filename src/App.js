import "./App.css";
import React, { useState, useMemo } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isValidNumber, setValidNumber] = useState(false);
  const isValid = useMemo(() => {
    console.log(isValidNumber);
    setValidNumber(isValidNumber)}, [isValidNumber]);

  const setValue = (e) => {
    setInputValue();
    checkIfValid(e);
    }

    const checkIfValid = (e) => {
      !isNaN(e) && e !== "" ? setValidNumber(true) : setValidNumber(false);
    }
  

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
        onChange={(e) => setValue(e.target.value)}
          className="input is-large"
          type="text"
          placeholder="Enter number..."

        />
        <span className="icon is-small is-right">
          <i className={`fas ${isValidNumber ? "fa-check" :"fa-times" }`} />
        </span> 
      </div>
    </div>
  );
}

export default App;
