import React, { Fragment, useState } from "react";

const EURO_DOLAR = 1.0097;

const useCurrentChangerState = () => {
  const [dolars, changeDolars] = useState(0);
  const [euros, changeEuros] = useState(0);

  const onChangeInput = ({ target: { value: newValue } }) => {
    if (!isNaN(newValue)) {
      const newValueFloat = parseFloat(newValue);
      changeEuros(newValueFloat);
      changeDolars(newValueFloat * EURO_DOLAR);
    }
  };

  return { dolars, euros, onChangeInput };
};

const CustomInput = () => {
  const { dolars, euros, onChangeInput } = useCurrentChangerState();

  return (
    <Fragment>
      <label htmlFor="currencyInput">Ingrese el valor en euros:</label>
      <input
        id="currencyInput"
        type="number"
        step="0.01"
        onChange={onChangeInput}
        placeholder="Euros"
      />
      <p>Dólares: {dolars.toFixed(2)}</p>
      <p>Euros: {euros.toFixed(2)}</p>
    </Fragment>
  );
};

function App() {
  return <CustomInput />;
}

export default App;
