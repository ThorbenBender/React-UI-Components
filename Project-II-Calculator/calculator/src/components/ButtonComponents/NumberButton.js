import React from 'react';
import './Button.css';

function NumberButton({props, text}) {
    return(
        <button className={props.buttonStyle}>{text}</button>
    )
}

export default NumberButton;
