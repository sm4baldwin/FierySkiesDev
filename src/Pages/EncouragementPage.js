import React, { useState, useEffect, useContext } from 'react'

import {EncourageTemplate} from '../Components/Templates/EncourageTemplate'

import {DBContext} from '../Contexts/FirebaseContext'

export default function EncouragementPage(props) {
  const [greetings, setGreetings] = useState([{id: 1, newGreeting: ''}])
  const [newGreeting, setNewGreeting] = useState('')
  const [encouragement, setEncouragement] = useState("Hello! Since we all need some love, click the button above or read through greetings and responses below!")
  const [prompt, setPrompt] = useState('Click here for something uplifting!')
  const promptList = [
    'Click again!',
    'Want some more?',
    `Isn't this so fun?!`,
    'Click me! Click me!',
    'I can do this all day',
    'Want something uplifting?'
  ]
  const db = useContext(DBContext)

  useEffect(() => {
    const dbRef = db.ref('Greeting')
    dbRef.on('value', (snapshot) => {
      const greetings = snapshot.val()
      const list = []
      for (let id in greetings) {
        list.push({ id, ...greetings[id] })
      }
      setGreetings(list)
    })
  }, [db]);

  const handleOnFormChange = (e) => {
    setNewGreeting(e.target.value)
  }

  const submitNewGreetingForm = () => {
    const ref = db.ref('Greeting');
    const newGreetingInput = {
      newGreeting,
      read: false,
      response: ''
    }       
    ref.push(newGreetingInput)
    setNewGreeting('')
  }

  const randomizeEncouragement = () => {
    const randEncouragement = (greetings) => {
        const randInt = Math.floor(Math.random() * Math.floor(greetings.length))
        return greetings[randInt].newGreeting
    }
    let randomEncouragement
    if (greetings.length > 1) {
        randomEncouragement = randEncouragement(greetings)
        while (randomEncouragement === encouragement) {
            randomEncouragement = randEncouragement(greetings)
        }
    } else if (greetings.length === 1) {
        randomEncouragement = greetings[0].newGreeting
    } else {
        randomEncouragement = "I need to add some book quotes!"
    }
    setEncouragement(randomEncouragement)
    let randomPrompt = promptList.filter(promptItem => promptItem !== prompt)[
        Math.floor(Math.random() * Math.floor(promptList.length - 1))]
    
    setPrompt(randomPrompt)
  }

  const markRead = (id) => {
    db.ref('Greeting').child(id).update({
        read: true
    })
  }

  const deleteGreeting = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        db.ref('Greeting').child(id).remove()
    }
  }

  const submitResponse = (id, value) => {
    if (id) {
      const ref = db.ref('Greeting').child(id);
      ref.update({
          response: value
      })
    }
  }

  return (
    <EncourageTemplate 
      greetings={greetings}
      handleOnFormChange={handleOnFormChange}
      newGreeting={newGreeting}
      submitNewGreeting={submitNewGreetingForm}
      encouragement={encouragement}
      prompt={prompt}
      newGreetingPrompt='Add your own!'
      randomizeEncouragement={randomizeEncouragement}
      markRead={markRead}
      deleteGreeting={deleteGreeting}
      submitResponse={submitResponse}
    />
  )
    
}