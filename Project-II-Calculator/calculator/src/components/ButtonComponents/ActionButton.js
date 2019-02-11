import React from 'react';
import './Button.css';

function ActionButton({desiredClass, button}){
    return(
        <button className={desiredClass}>{button}</button>
    )
}

export default ActionButton;