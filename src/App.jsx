import React, { useState } from "react";

const EURO_DOLAR = 1.0097;

const useCurrencyConverter = () => {
  const [euros, setEuros] = useState(0);
  const [dollars, setDollars] = useState(0);

  const handleInputChange = (value, inputType) => {
    if (inputType === "euros") {
      setEuros(value);
      setDollars(value * EURO_DOLAR);
    } else if (inputType === "dollars") {
      setDollars(value);
      setEuros(value / EURO_DOLAR);
    }
  };

  return { euros, dollars, handleInputChange };
};

const CustomInput = () => {
  const { euros, dollars, handleInputChange } = useCurrencyConverter();

  const handleEurosChange = (event) => {
    const value = event.target.value;
    handleInputChange(value, "euros");
  };

  const handleDollarsChange = (event) => {
    const value = event.target.value;
    handleInputChange(value, "dollars");
  };

  return (
    <div>
      <label htmlFor="eurosInput">Euros:</label>
      <input
        id="eurosInput"
        type="number"
        step="0.01"
        value={euros}
        onChange={handleEurosChange}
      />
      <label htmlFor="dollarsInput">Dollars:</label>
      <input
        id="dollarsInput"
        type="number"
        step="0.01"
        value={dollars}
        onChange={handleDollarsChange}
      />
    </div>
  );
};

export default CustomInput;
