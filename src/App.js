import React from 'react'
import {Link as RouterLink, Switch, Route} from 'react-router-dom'
import './App.css'

import MenuBar from './Components/Organisms/MenuBar'

import EncouragementPage from './Pages/EncouragementPage/EncouragementPage'
import {HomePage} from './Pages/Home/Home'

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
      <DBContextProvider>
        <MenuBar />
        <main className='App'>
          {/* <nav>
            <ul>
              <li>
                <RouterLink to="/Encouragement">Encouragement App</RouterLink>
              </li>
              <li>
                <RouterLink to="/" exact>Home</RouterLink>
              </li>
              {/* <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li> }
            </ul>
          </nav> */}

          <Switch>
            <Route path='/Encouragement/'>
              <EncouragementPage />
            </Route>
            <Route path='/' exact>
              <HomePage pages={pages}/>
            </Route>
          </Switch>
        </main>
      </DBContextProvider>
    </ThemeProvider>
  )
}

export default App
