import React from 'react'
import firebase from '../Services/firebase'

export const DBContext = React.createContext()

export const DBContextProvider = (props) => {
    return (
        <DBContext.Provider value={firebase}>
            {props.children}
        </DBContext.Provider>
    )
}