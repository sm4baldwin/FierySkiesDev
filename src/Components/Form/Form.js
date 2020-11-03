import React from 'react'
import './Form.css'

export const Form = (props) => {
    return (
        <div>
            <input type="text" onChange={props.handleOnChange} value={props.value} />
            <button onClick={props.createGreeting}>Add a new greeting!</button>
        </div>
    )
}