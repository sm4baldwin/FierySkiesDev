import React from 'react'
import './App.css'

import Greetings from './Views/Greetings/Greetings'
import firebase from './Services/firebase'

function App() {
  return (
    <div className="App">
      <Greetings firebase={firebase} />
    </div>
  )
}

export default App
