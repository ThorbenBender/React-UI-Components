import React from 'react';
import './Card.css';


const CardContent = () => {
    return(
        <div className="cardContent">
            <h4>
                Get Started with React
            </h4>
            <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application.
            </p>
            <a>
                reactjs.org
            </a>
        </div>
    )
}

export default CardContent;