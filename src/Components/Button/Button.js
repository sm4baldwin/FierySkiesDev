import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div 
            style={props.shadow} 
            className="button" 
            onClick={() => {
                props.setGreeting("Hope your day is going great!!!");
                }
            }
            >
        {props.text}
        </div>
    )
}