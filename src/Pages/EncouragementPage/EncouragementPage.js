import React, { useState, useEffect, useContext } from 'react'

import GreetingList from '../../Components/GreetingList/GreetingList'
import GreetingInput from '../../Components/GreetingInput/GreetingInput'
import {EncourageTemplate} from '../../Components/Templates/EncourageTemplate'

import {DBContext} from '../../Contexts/FirebaseContext'

export default function EncouragementPage(props) {
    const [greetings, setGreetings] = useState([{id: 1, newGreeting: ''}])
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

    return (
      <EncourageTemplate greetings={greetings}/>
        // <div className="greeting-container">
        //     <GreetingInput parentGreetings={parentGreetings}/>
        //     <GreetingList parentGreetings={parentGreetings}/>
        // </div>
    )
    
}