import React from 'react';
import NumberButton from './NumberButton';
import './Button.css';


const NumberField = () => {
    return(
        <div className="NumberField">
            <NumberButton 
                text= '1'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '2'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '3'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '4'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '5'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '6'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '7'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton
                text= '8'
                props= {
                    {buttonStyle: 'number'}
                }/>
            <NumberButton 
                text= '9'
                props= {
                    {buttonStyle: 'number'}
                }/>
        </div>
    )
}

export default NumberField;