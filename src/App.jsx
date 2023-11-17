

import React, { useState } from "react";

const useCurrencyConverter = (initialValue, exchangeRate) => {
  const [value, setValue] = useState(initialValue);
  const [convertedValue, setConvertedValue] = useState(initialValue * exchangeRate);

  const handleInputChange = (newValue) => {
    if (!isNaN(newValue)) {
      setValue(newValue);
      setConvertedValue(newValue * exchangeRate);
    }
  };

  return { value, convertedValue, handleInputChange };
};

const CustomInput = ({ currencySymbol, initialValue, change }) => {
  const exchangeRate = parseFloat(change);

  const { value, convertedValue, handleInputChange } = useCurrencyConverter(
    parseFloat(initialValue),
    exchangeRate
  );

  const handleValueChange = (event) => {
    const newValue = parseFloat(event.target.value);
    handleInputChange(newValue);
  };

  return (
    <div style={styles.customInput}>
      <label style={styles.currencyLabel}>{`[${currencySymbol}]`}</label>
      <input
        style={styles.inputField}
        type="number"
        step="0.01"
        value={value}
        onChange={handleValueChange}
      />
      <p style={styles.convertedValue}>{`Euros: ${convertedValue.toFixed(2)}`}</p>
    </div>
  );
};

const App = () => (
  <div style={styles.appContainer}>
    <CustomInput currencySymbol="$" initialValue="10" change="1.055925" />
    <CustomInput currencySymbol="£" initialValue="15" change="7.578144" />
    <CustomInput currencySymbol="¥" initialValue="20" change="0.8665750" />
  </div>
);

const styles = {
  appContainer: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  customInput: {
    borderBottom: "2px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  currencyLabel: {
    marginRight: "10px",
    fontSize: "18px",
  },
  inputField: {
    padding: "5px",
    fontSize: "16px",
    border: "none",
    borderBottom: "1px solid #999",
    width: "80px",
  },
  convertedValue: {
    margin: "5px 0",
    fontSize: "16px",
  },
};

export default App;

