import React from 'react'
import {Home} from '../../Components/Templates/HomeTemplate'

export const HomePage = (props) => {
    return (
            <Home pages={props.pages} prompt={'Please select an App'} />
    )
}