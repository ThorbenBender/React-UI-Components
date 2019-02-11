import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import NumberField from '../src/components/ButtonComponents/NumberField';
import ActionButton from '../src/components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="Calculator">
      <CalculatorDisplay />
      <ActionButton
        desiredClass= 'actionbutton'
        button= "Clear" />
      <NumberField />
      <ActionButton
        desiredClass="actionbutton"
        button= "0" />
    </div>
  );
};

export default App;
