import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'

import MenuBar from './Components/Organisms/MenuBar'

import EncouragementPage from './Pages/EncouragementPage'
import HomePage from './Pages/Home'

import {DBContextProvider} from './Contexts/FirebaseContext'

import {ThemeProvider} from '@material-ui/core/styles'
import {theme} from './Contexts/ThemeContext'


const pages = [
  {title: 'Home', url: '/'},
  {title: 'Encouragement', url: '/Encouragement/'}
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <main className='App'>
        <Switch>
          <Route path='/Encouragement/'>
            <DBContextProvider>
              <EncouragementPage />
            </DBContextProvider>
          </Route>
          <Route path='/' exact>
            <HomePage pages={pages}/>
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  )
}

export default App
