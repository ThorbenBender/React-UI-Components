import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';
const Cardcontainer = () => {
    return(
        <div>
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default Cardcontainer;