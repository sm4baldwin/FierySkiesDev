import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <button 
            className="button" 
            onClick={() => {
                props.onClickParam ? props.onClick(props.onClickParam) : props.onClick()
                }
            }
        >
            {props.text}
        </button>
    )
}