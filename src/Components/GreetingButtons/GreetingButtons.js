import React, {useState, useContext} from 'react'
import Button from '../Button/Button'
import Form from '../Form/Form'
import './GreetingButtons.css'
import {DBContext} from '../../Contexts/FirebaseContext'

export const UpdateGreeting = (props) => {
    const db = useContext(DBContext)

    const markRead = (id) => {
        db.ref('Greeting').child(id).update({
            read: true
        })
    }
    
    return (
        <Button 
            onClick={markRead} 
            text={"Mark Read?"} 
            onClickParam={props.itemID} />
    )
}

export const DeleteGreeting = (props) => {
    const db = useContext(DBContext)

    const deleteGreeting = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            db.ref('Greeting').child(id).remove()
        }
      };
    
    return (
        <Button 
            onClick={deleteGreeting} 
            text={'Delete?'} 
            onClickParam={props.itemID}
            />
    )
}

export const AddResponse = (props) => {
    const [response, setResponse] = useState('')
    const db = useContext(DBContext)

    const handleOnFormChange = (e) => {
        setResponse(e.target.value)
    }

    const submitForm = () => {
        const ref = db.ref('Greeting').child(props.itemID);
        ref.update({
            response: response
        })
        setResponse('')
}

    return (
        <Form 
        handleOnChange={handleOnFormChange} 
        value={response} 
        submitForm={submitForm}
        formButtonPrompt={!props.response ? 'Submit Response' : 'Update Response'}/>
    )
}