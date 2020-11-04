import React from 'react'
import './Form.css'
import Button from '../Button/Button'

export default (props) => {
    return (
        <div className="form">
            <input className='form-input' type="text" onChange={props.handleOnChange} value={props.value} />
            <Button onClick={props.submitForm} text={props.formButtonPrompt} />
        </div>
    )
}