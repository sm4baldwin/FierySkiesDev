import React, {useState} from 'react'
import './GreetingInput.css'
import Button from '../Button/Button'
import Form from '../Form/Form'


export default function GreetingInput(props) {
    const [greeting, setGreeting] = useState("Hello! If you need encouragement, click the button above or read through the list below!")
    const [prompt, setPrompt] = useState('Click for Encouragement')
    const [newGreeting, setNewGreeting] = useState('')
    const promptList = ['Click again!', 'Want some more?', `Isn't this so fun?!`, 'Click me! Click me!',
                        'I can do this all day', 'Want something uplifting?']

    const handleOnFormChange = (e) => {
        setNewGreeting(e.target.value)
    }
    
    const submitForm = () => {
            const ref = props.firebase.database().ref('Greeting');
            const newGreetingInput = {
              newGreeting,
              read: false,
              response: ''
            }       
            ref.push(newGreetingInput)
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
        } else if (props.parentGreetings.length === 1) {
            randomGreeting = props.parentGreetings[0].newGreeting
        } else {
            randomGreeting = "I need to add some more encouragements!"
        }
        setGreeting(randomGreeting)
        let randomPrompt = promptList.filter(promptItem => promptItem !== prompt)[
            Math.floor(Math.random() * Math.floor(promptList.length - 1))]
        
        setPrompt(randomPrompt)
    }

    return (
        <div className="menu">
            <Button text={prompt} onClick={randomizeGreeting} />
            <div className='encouragement'>{greeting}</div>
            <Form 
                handleOnChange={handleOnFormChange} 
                value={newGreeting} 
                submitForm={submitForm} 
                formButtonPrompt={'Add your own!'}
                />
        </div>
    )
}