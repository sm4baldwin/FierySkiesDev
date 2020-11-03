import React, {useState} from 'react'
import './GreetingInput.css'
import Button from '../../Components/Button/Button'
import { Form } from '../../Components/Form/Form'


export default function GreetingInput(props) {
    const [greeting, setGreeting] = useState("Hey Emily!")
    const [newGreeting, setNewGreeting] = useState('')
    
    const handleOnFormChange = (e) => {
        setNewGreeting(e.target.value)
    }
    
    const createGreeting = () => {
            const todoRef = props.firebase.database().ref('Greeting');
            const newGreetingInput = {
              newGreeting,
              active: false
            }       
            todoRef.push(newGreetingInput)
            setNewGreeting('')
    }

    const randomizeGreeting = () => {
        const randGreeting = (parentGreetings) => {
            const randInt = Math.floor(Math.random() * Math.floor(parentGreetings.length))
            return parentGreetings[randInt].newGreeting
        }
        let randomGreeting
        if (props.parentGreetings.length > 1) {
            randomGreeting = randGreeting(props.parentGreetings)
            while (randomGreeting === greeting) {
                randomGreeting = randGreeting(props.parentGreetings)
            }
        } else {
            randomGreeting = "I need to add some more encouragements!"
        }
        setGreeting(randomGreeting)
    }

    return (
        <div className="menu">
            <Button greeting={greeting} setGreeting={randomizeGreeting} />
            <Form handleOnChange={handleOnFormChange} value={newGreeting} createGreeting={createGreeting} />
        </div>
    )
}