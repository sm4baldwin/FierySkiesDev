import React, {useState} from 'react'
import Button from '../Button/Button'
import Form from '../Form/Form'
import './GreetingButtons.css'

export const UpdateGreeting = (props) => {
    
    const markRead = (id) => {
        props.firebase.database().ref('Greeting').child(id).update({
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
    
    const deleteGreeting = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            props.firebase.database().ref('Greeting').child(id).remove()
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

    const handleOnFormChange = (e) => {
        setResponse(e.target.value)
    }

    const submitForm = () => {
        const ref = props.firebase.database().ref('Greeting').child(props.itemID);
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