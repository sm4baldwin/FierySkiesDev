import React from 'react'
import Canvas from '../Organisms/Canvas'

export default function FierySkiesTemplate(props) {
    return (
        <Canvas draw={props.draw} cvWidth='80vw' cvHeight='70vh' />
    )
}