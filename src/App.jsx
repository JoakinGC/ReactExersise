import React, { Fragment, useState } from "react";

const EURO_DOLAR = 1.0097;

const useCurrentChangerState = () => {
  const [dolars, changeDolars] = useState(0);
  const [euros, changeEuros] = useState(0);

  const onChangeInput = ({ target: { value: newValue } }) => {
    changeDolars(newValue * EURO_DOLAR);
    changeEuros(newValue * 1);
  };

  return { dolars, euros, onChangeInput };
};

const CurrentChanger = () => {
  const { dolars, euros, onChangeInput } = useCurrentChangerState();

  return (
    <Fragment>
      <input type="number" step="0.01" onChange={onChangeInput} />
      Dolares: {dolars.toFixed(2)} Euros: {euros.toFixed(2)}
    </Fragment>
  );
};

function App() {
  return <CurrentChanger />;
}

export default App;
