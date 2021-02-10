import React from 'react'
import {Sprite, Group, Text} from 'react-konva'

export const CharacterAnimation = (props) => {
    return (
        <Group
            x={props.characterState.location.x}
            y={props.characterState.location.y}
            draggable={true}
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

            {true
            // props.kesselState.toggledStates.mouseover 
            && <Text 
                text={`Character: ${props.characterName}\nLocation: [${props.characterState.location.x}, ${props.characterState.location.y}]`}
            />}
            <Sprite
                ref={props.characterRef}
                image={props.characterState.image}
                animation={props.characterState.animation}
                frameRate={10}
                frameIndex={0}
                animations={props.characterState.animations}
                x={props.characterState.toggledStates.isDragging ? 0 : 13}
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