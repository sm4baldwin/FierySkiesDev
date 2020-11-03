import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div 
            style={props.shadow} 
            className="button" 
            onClick={() => {
                props.setGreeting();
                }
            }
            >
        {props.greeting}
        </div>
    )
}