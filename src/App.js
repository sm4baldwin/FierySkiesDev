import React from 'react'
import {Link as RouterLink, Switch, Route} from 'react-router-dom'
import './App.css'

import EncouragementPage from './Pages/EncouragementPage/EncouragementPage'
import {HomePage} from './Pages/Home/Home'

import firebase from './Services/firebase'

import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#167878',
    },
    secondary: {
      main: '#ffab91',
    },
  },
  // breakpoints: {

  // }
}), {breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], factor: 3})

const pages = [
  {title: 'Home', url: '/'},
  {title: 'Encouragement', url: '/Encouragement/'}
]

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <EncouragementPage firebase={firebase} />
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
