import React from 'react'
import {Home} from '../Components/Templates/HomeTemplate'

export default (props) => {
    return (
            <Home pages={props.pages} prompt={'Welcome to the Fiery Skies Lobby! Please come on in!'} />
    )
}