import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import NumberField from '../src/components/ButtonComponents/NumberField';
import ActionButton from '../src/components/ButtonComponents/ActionButton';
import RedButton from '../src/components/ButtonComponents/red-button';

const App = () => {
  return (
    <div className="Calculator">
      <CalculatorDisplay />
      <div className="button-field">
        <div className="left-side">
          <ActionButton
            desiredClass= 'actionbutton'
            button= "Clear" />
          <NumberField />
          <ActionButton
            desiredClass="actionbutton"
            button= "0" />
        </div>
        <div className="right-side">
          <RedButton 
            className= 'Red-Button'
            type='/' />
            <RedButton 
            className= 'Red-Button'
            type='x' />
            <RedButton 
            className= 'Red-Button'
            type='-' />
            <RedButton 
            className= 'Red-Button'
            type='+' />
            <RedButton 
            className= 'Red-Button'
            type='=' />
        </div>
      </div>
    </div>
  );
};

export default App;
