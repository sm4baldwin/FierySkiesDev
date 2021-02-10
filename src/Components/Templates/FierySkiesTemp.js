import React from 'react'
import {Stage, Layer, Image} from 'react-konva'
import {CharacterAnimation} from '../Organisms/CharacterAnimation'
import Thracia from '../../Assets/Other/Thracia.jpg'
import useImage from 'use-image'

export default function FierySkiesTemplate(props) {
    const [ThraciaImage] = useImage(Thracia)  

    return (
        <Stage width={1280} height={720}>
            <Layer>
                <Image 
                    image={ThraciaImage}
                />
            </Layer>
            <Layer>
                <CharacterAnimation
                    characterState={props.kesselState}
                    setCharacterState={props.setKesselState}
                />
            </Layer>
        </Stage>
    )
}