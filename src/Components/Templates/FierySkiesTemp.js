import React from 'react'
import {Stage, Layer, Image} from 'react-konva'
import {CharacterAnimation} from '../Organisms/CharacterAnimation'

export default function FierySkiesTemplate(props) {
    return (
        <Stage width={1300} height={720}>
            <Layer>
                <Image 
                    image={props.map}
                />
            </Layer>
            <Layer>
                <CharacterAnimation
                    characterState={props.kesselState}
                    setCharacterState={props.setKesselState}
                    characterName="Kessel"
                    characterRef={props.kesselRef}
                />
            </Layer>
        </Stage>
    )
}