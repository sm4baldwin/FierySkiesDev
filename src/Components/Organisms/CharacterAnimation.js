import React, {useRef, useEffect} from 'react'
import {Sprite, Group, Text} from 'react-konva'
import useImage from 'use-image'


export const CharacterAnimation = (props) => {
    const characterRef = useRef(null)
    const [characterImage] = useImage(props.characterState.image_import)
    let location
    useEffect(() => {
        if (characterRef.current) {
            characterRef.current.start()
        }
    }, [characterRef])
    useEffect(() => {
        console.log(props.characterState)
    }, [props.characterState])

    return (
        <Group
            x={props.characterState.location.x}
            y={props.characterState.location.y}
            draggable={true}
            dragBoundFunc={(pos) => {
                let new_x
                let new_y
                switch (true) {
                    case pos.x < -15:
                        new_x = -15
                        break
                    case pos.x > 1160:
                        new_x = 1160
                        break
                    default:
                        new_x = pos.x
                        break
                }
                switch (true) {
                    case pos.y < -20:
                        new_y = -20
                        break
                    case pos.y > 620:
                        new_y = 600
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
            onDragStart={() => {
                props.setCharacterState({...props.characterState, 
                    toggledStates: {
                        ...props.characterState.toggledStates,
                        isDragging: true
                    },
                    animation: 'run',
                })
            }}
            onDragEnd={(e) => {
                props.setCharacterState({...props.characterState, 
                    location: {
                        x: e.target.x(),
                        y: e.target.y()
                    },
                    toggledStates: {
                        ...props.characterState.toggledStates,
                        isDragging: false
                    },
                    animation: props.characterState.prevAnimation
                })
            }}
        >

            <Text 
                text={`Name: ${props.characterState.name}\nLoc: [${props.characterState.location.x}, ${props.characterState.location.y}]`}
                y={props.characterState.location.y >= 25 ? 25 : 100}
                x={props.characterState.location.x <= 35 ? 50 : props.characterState.location.x >= 1100 ? 0 : 25}
            />
            <Sprite
                ref={characterRef}
                image={characterImage}
                animation={props.characterState.animation}
                frameRate={10}
                frameIndex={0}
                animations={props.characterState.animations}
                x={props.characterState.toggledStates.isDragging ? 25 : 38}
                y={props.characterState.toggledStates.isDragging ? 0 : 25}
                scaleX={props.characterState.toggledStates.isDragging ? .8: .6}
                scaleY={props.characterState.toggledStates.isDragging ? .8: .6}
                onMouseOver={() => {
                    props.setCharacterState({...props.characterState, 
                        toggledStates: {
                            mouseover: true
                        },
                        prevAnimation: props.characterState.animation,
                        animation: 'attack1',
                    })
                }}
                onMouseOut={() => {
                    props.setCharacterState({...props.characterState, 
                        toggledStates: {
                            mouseover: false
                        },
                        animation: props.characterState.prevAnimation
                    })
                }}
                onClick={() => {
                    let randomAnim = props.characterState.animation
                    while (randomAnim === props.characterState.animation) {
                        randomAnim = props.characterState.animationList[Math.floor(Math.random()*props.characterState.animationList.length)]
                    }
                    props.setCharacterState({...props.characterState, 
                        animation: randomAnim,
                        prevAnimation: randomAnim
                    })
                }}
            />
        </Group>
    )
}