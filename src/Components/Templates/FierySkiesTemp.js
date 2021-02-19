import React, {useState, } from 'react'
import {Stage, Layer, Image, Group, Circle} from 'react-konva'
import {CharacterAnimation, CharacterSelection} from '../Organisms/CharacterAnimation'
import Thracia from '../../Assets/Other/Thracia.jpg'
import useImage from 'use-image'
import { black } from 'material-ui/styles/colors'

export default function FierySkiesTemplate(props) {
    const [ThraciaImage] = useImage(Thracia)
    const stageWidth = 2222
    const stageHeight = 1250
    const ellipseWidth = 1300
    const ellipseHeight = 750
    let ellipseCenter = {
        x: 650,
        y: 400
    }
    const [mapDrag, setMapDrag] = useState({x: -500, y: -250})

    let [selectedCharacter, setSelectedCharacter] = useState("Clyde")
    let characterList = {
        Kessellia: {
            state: props.kesselliaState,
            setState: props.setKesselliaState,
        },
        Forren: {
            state: props.forrenState,
            setState: props.setForrenState,
        },
        SryKhan: {
            state: props.sryKhanState,
            setState: props.setSryKhanState,
        },
        Clyde: {
            state: props.clydeState,
            setState: props.setClydeState,
        },
        Ebenezer: {
            state: props.ebenezerState,
            setState: props.setEbenezerState,
        },
        Glonch: {
            state: props.glonchState,
            setState: props.setGlonchState,
        },
        "Kroy Wen": {
            state: props.kroyWenState,
            setState: props.setKroyWenState,
        },
        "Madame Peregrin": {
            state: props.madamePeregrinState,
            setState: props.setMadamePeregrinState,
        },
        Eugenides: {
            state: props.eugenidesState,
            setState: props.setEugenidesState,
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: `${ellipseHeight + 60}px`}}>
            <Stage width={110} height={stageHeight}>
                <Layer>
                    <CharacterSelection
                        characterState={props.kesselliaState}
                        setCharacterState={props.setKesselliaState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={0}
                    />
                    <CharacterSelection
                        characterState={props.forrenState}
                        setCharacterState={props.setForrenState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={1}
                    />
                    <CharacterSelection
                        characterState={props.clydeState}
                        setCharacterState={props.setClydeState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={1.8}
                    />
                    <CharacterSelection
                        characterState={props.kroyWenState}
                        setCharacterState={props.setKroyWenState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={3}
                    />
                    <CharacterSelection
                        characterState={props.ebenezerState}
                        setCharacterState={props.setEbenezerState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={4}
                    />
                    <CharacterSelection
                        characterState={props.sryKhanState}
                        setCharacterState={props.setSryKhanState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={5}
                    />
                    <CharacterSelection
                        characterState={props.glonchState}
                        setCharacterState={props.setGlonchState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={5.9}
                    />
                    <CharacterSelection
                        characterState={props.madamePeregrinState}
                        setCharacterState={props.setMadamePeregrinState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={7}
                    />
                    <CharacterSelection
                        characterState={props.eugenidesState}
                        setCharacterState={props.setEugenidesState}
                        selectCharacter={setSelectedCharacter}
                        selected={selectedCharacter}
                        order={7.8}
                    />
                </Layer>
            </Stage>
            <Stage
                width={stageWidth}
                height={stageHeight}
                x={0}
                y={0}
                onTouchStart={(e) => {
                    e.evt.preventDefault()
                }}
                onTouchMove={(e) => {
                    e.evt.preventDefault()
                }}
                
            >
                <Layer
                    style={{overflow: 'scroll'}}
                >
                    <Group
                        clipFunc={(ctx) => {
                            ctx.beginPath()
                            ctx.ellipse(ellipseCenter.x, ellipseCenter.y, ellipseWidth/2, ellipseHeight/2, 0, 0, 2 * Math.PI)
                            ctx.stroke()
                            
                            ;
                        }}
                        position={{x: 0, y: 0}}

                        >
                            <Image 
                                draggable
                                image={ThraciaImage} x={mapDrag.x} y={mapDrag.y}
                                onDragMove={(e) => {
                                    setMapDrag({x: e.target.x(), y: e.target.y()})

                                }}
                                dragBoundFunc={(pos) => {
                                    let new_x
                                    let new_y
                                    switch (true) {
                                        case pos.x > -300:
                                            new_x = -300
                                            break
                                        case pos.x < -(stageWidth - ellipseWidth - 250):
                                            new_x = -(stageWidth - ellipseWidth - 250)
                                            break
                                        default:
                                            new_x = pos.x
                                            break
                                    }
                                    switch (true) {
                                        case pos.y > 25:
                                            new_y = 25
                                            break
                                        case pos.y < -(stageHeight - ellipseHeight - 25):
                                            new_y = -(stageHeight - ellipseHeight - 25)
                                            break
                                        default:
                                            new_y = pos.y
                                            break
                                    }
                                    return {
                                        x: new_x,
                                        y: new_y
                                    }
                                }}
                            />
                            {selectedCharacter && 
                            <CharacterAnimation
                                characterState={characterList[selectedCharacter].state}
                                setCharacterState={characterList[selectedCharacter].setState}
                                mapDragOffset={mapDrag}
                                ellipseRadius={stageHeight/2 - 50}

                                center={{
                                    centerLeft: {
                                        x: ellipseWidth/2 + mapDrag.x + 500 - 235,
                                        y: ellipseHeight/2 + mapDrag.y + 190},
                                    centerRight: {
                                        x: ellipseWidth/2 + mapDrag.x + 500 + 170,
                                        y: ellipseHeight/2 + mapDrag.y + 190},
                                    }}
                            />}
                        </Group>
                        
                </Layer>
                <Layer><Circle x={ellipseWidth/2 + mapDrag.x + 500} y={ellipseHeight/2 + mapDrag.y + 250} radius={10} fillEnabled={true} fill={black}/></Layer>
            </Stage>
        </div>
    )
}