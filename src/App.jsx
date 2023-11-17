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

const CurrencyChanger = ({ currencySymbol, initialValue, change }) => {
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
    <div>
      <label htmlFor="currencyInput">{`[${currencySymbol}]`}</label>
      <input
        id="currencyInput"
        type="number"
        step="0.01"
        value={value}
        onChange={handleValueChange}
      />
      <p>{`Euros: ${convertedValue.toFixed(2)}`}</p>
    </div>
  );
};

const App = () => (
  <div>
    <CurrencyChanger currencySymbol="$" initialValue="10" change="1.055925" />
    <CurrencyChanger currencySymbol="£" initialValue="15" change="7.578144" />
    <CurrencyChanger currencySymbol="¥" initialValue="20" change="0.8665750" />
  </div>
);

export default App;
