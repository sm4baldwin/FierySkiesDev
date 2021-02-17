import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'

// import MenuBar from './Components/Organisms/MenuBar'

import FierySkies from './Pages/FierySkies'
import EncouragementPage from './Pages/EncouragementPage'
import HomePage from './Pages/Home'

import {DBContextProvider} from './Contexts/FirebaseContext'

import {ThemeProvider} from '@material-ui/core/styles'
import {theme} from './Contexts/ThemeContext'


const pages = [
  {title: 'Head to Thracia', url: '/FierySkies/'},
  {title: 'Check Announcements', url: '/Encouragement/'},
  {title: 'Speak with the Concierge', url: '/StephenBaldwin'},
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MenuBar /> */}
      <main className='App'>
        <Switch>
          <Route path='/' exact>
            <HomePage pages={pages}/>
          </Route>
          <Route path='/FierySkies/'>
            <DBContextProvider>
              <FierySkies />
            </DBContextProvider>
          </Route>
          <Route path='/Encouragement/'>
            <DBContextProvider>
              <EncouragementPage />
            </DBContextProvider>
          </Route>
          {/* <Route path='/StephenBaldwin/'>
            <DBContextProvider>
              <FierySkies />
            </DBContextProvider>
          </Route> */}
        </Switch>
      </main>
    </ThemeProvider>
  )
}

export default App
