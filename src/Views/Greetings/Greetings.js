import React, { useState, useEffect } from 'react'
import GreetingList from './GreetingList/GreetingList'
import GreetingInput from './GreetingInput/GreetingInput'
import './Greetings.css'

export default function Greetings(props) {
    const [parentGreetings, setParentGreetings] = useState([{id: 1, newGreeting: ''}])

    useEffect(() => {
        const todoRef = props.firebase.database().ref('Greeting')
        todoRef.on('value', (snapshot) => {
          const greetings = snapshot.val()
          const list = []
          for (let id in greetings) {
            list.push({ id, ...greetings[id] })
          }
          setParentGreetings(list)
        })
      }, [props.firebase]);

    return (
        <div className="greeting-container">
            <GreetingInput firebase={props.firebase} parentGreetings={parentGreetings}/>
            <GreetingList firebase= {props.firebase} parentGreetings={parentGreetings}/>

        </div>
    )
    
}