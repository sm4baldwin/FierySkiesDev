import React, {useRef, useEffect} from 'react'
import {Sprite, Group, Text} from 'react-konva'
import useImage from 'use-image'


export const CharacterSelection = (props) => {
    const characterRef = useRef(null)
    const [characterImage] = useImage(props.characterState.sprite.image_import)

    useEffect(() => {
        if (characterRef.current) {
            characterRef.current.start()
        }
    }, [characterRef])

    useEffect(() => {
        if (props.selected !== props.characterState.name && props.characterState.sprite.selectionAnimation === 'attack1') {
            props.setCharacterState({...props.characterState, 
                sprite: {
                    ...props.characterState.sprite,
                    selectionAnimation: 'idle',
                }
            })
        } else if (props.selected === props.characterState.name && props.characterState.sprite.selectionAnimation !== 'attack1') {
            props.setCharacterState({...props.characterState, 
                sprite: {
                    ...props.characterState.sprite,
                    selectionAnimation: 'attack1',
                }
            })
        }

    }, [props])

    return (
        <Group
            x={props.characterState.sprite.selectionOffset + 5}
            y={props.order * 79}
            draggable={false}
        >            
            <Sprite
                ref={characterRef}
                image={characterImage}
                animation={
                    props.characterState.sprite.selectionAnimation
                }
                frameRate={7}
                frameIndex={0}
                animations={props.characterState.sprite.animations}
                x={0}
                y={0}
                scaleX={props.characterState.sprite.scale}
                scaleY={props.characterState.sprite.scale}
                onMouseOver={() => {
                    if (props.characterState.sprite.selectionAnimation !== 'attack1') {
                        props.setCharacterState({...props.characterState, 
                            sprite: {
                                ...props.characterState.sprite,
                                toggledStates: {
                                    ...props.characterState.sprite.toggledStates,
                                    mouseover: true,
                                },
                                prevSelectionAnimation: props.characterState.sprite.prevSelectionAnimation,
                                selectionAnimation: 'run',
                            }
                        })
                    }
                }}
                onMouseOut={() => {
                    if (props.characterState.sprite.selectionAnimation !== 'attack1') {
                        props.setCharacterState({...props.characterState, 
                            sprite: {
                                ...props.characterState.sprite,
                                toggledStates: {
                                    ...props.characterState.sprite.toggledStates,
                                    mouseover: false
                                },
                                selectionAnimation: props.characterState.sprite.prevSelectionAnimation
                            }
                        })
                    }
                }}
                onClick={() => {
                    props.selectCharacter(props.characterState.name)
                }}
            />
            <Text 
                text={`${props.characterState.name}`}
                y={props.characterState.sprite.spriteHeight * props.characterState.sprite.scale}
                x={props.characterState.sprite.labelOffset}
                align={'center'}
            />
        </Group>
    )
}

export const CharacterAnimation = (props) => {
    const characterRef = useRef(null)
    const [characterImage] = useImage(props.characterState.sprite.image_import)

    useEffect(() => {
        if (characterRef.current) {
            characterRef.current.start()
        }
    }, [characterRef])

    return (
        <Group
            x={props.characterState.sprite.spriteLocation.x + props.mapDragOffset.x}
            y={props.characterState.sprite.spriteLocation.y + props.mapDragOffset.y}
            draggable={true}
            // dragBoundFunc={(pos) => {
            //     let new_x
            //     let new_y
            //     switch (true) {
            //         case pos.x < 10:
            //             new_x = 10
            //             break
            //         case pos.x > 1200 + props.characterState.sprite.xBoundRightOffset:
            //             new_x = 1200 + props.characterState.sprite.xBoundRightOffset
            //             break
            //         default:
            //             new_x = pos.x
            //             break
            //     }
            //     switch (true) {
            //         case pos.y < -10:
            //             new_y = -10
            //             break
            //         case pos.y + (props.characterState.sprite.spriteHeight * props.characterState.sprite.scale) >= 685:
            //             new_y = 685 - (props.characterState.sprite.spriteHeight * props.characterState.sprite.scale)
            //             break
            //         default:
            //             new_y = pos.y
            //             break
            //     }
            //     return {
            //         x: new_x,
            //         y: new_y
            //     }
            // }}
            onDragStart={() => {
                props.setCharacterState({...props.characterState, 
                    sprite: {
                        ...props.characterState.sprite,
                        toggledStates: {
                            ...props.characterState.sprite.toggledStates,
                            isDragging: true
                        },
                        animation: 'run',
                    }
                })
            }}
            onDragEnd={(e) => {
                props.setCharacterState({...props.characterState, 
                    sprite: {
                        ...props.characterState.sprite,
                        spriteLocation: {
                            x: e.target.x() - props.mapDragOffset.x,
                            y: e.target.y() - props.mapDragOffset.y
                        },
                        toggledStates: {
                            mouseover: true,
                            isDragging: false
                        },
                        animation: props.characterState.sprite.prevAnimation
                    }
                })
            }}
        >            
            <Sprite
                ref={characterRef}
                image={characterImage}
                animation={props.characterState.sprite.animation}
                frameRate={7}
                frameIndex={0}
                animations={props.characterState.sprite.animations}
                shadowColor={'rgb(161,161,161)'}
                shadowEnabled={true}
                shadowForStrokeEnabled={false}
                shadowOffset={{x: 5, y: 15}}
                shadowBlur={20}
                shadowOpacity={30}
                x={0}
                y={0}
                scaleX={props.characterState.sprite.scale}
                scaleY={props.characterState.sprite.scale}
                onMouseOver={() => {
                    props.setCharacterState({...props.characterState, 
                        sprite: {
                            ...props.characterState.sprite,
                            toggledStates: {
                                ...props.characterState.sprite.toggledStates,
                                mouseover: true,
                            },
                            prevAnimation: props.characterState.sprite.animation,
                        }
                    })
                }}
                onMouseOut={() => {
                    props.setCharacterState({...props.characterState, 
                        sprite: {
                            ...props.characterState.sprite,
                            toggledStates: {
                                ...props.characterState.sprite.toggledStates,
                                mouseover: false
                            },
                        }
                    })
                }}
                onClick={() => {
                    let randomAnim = props.characterState.sprite.animation
                    while (randomAnim === props.characterState.sprite.animation) {
                        randomAnim = props.characterState.sprite.animationList[Math.floor(Math.random()*props.characterState.sprite.animationList.length)]
                    }
                    props.setCharacterState({...props.characterState, 
                        sprite: {
                            ...props.characterState.sprite,
                            animation: randomAnim,
                            prevAnimation: randomAnim
                        }
                    })
                }}
            />
            {!props.characterState.sprite.toggledStates.isDragging && props.characterState.sprite.toggledStates.mouseover &&
            <Text 
                text={`${props.characterState.name}`}
                fill={'darkmagenta'}
                y={props.characterState.sprite.spriteLocation.y >= 600 ? Math.abs(props.characterState.sprite.labelOffset) : props.characterState.sprite.spriteHeight * props.characterState.sprite.scale}
                x={props.characterState.sprite.labelOffset}
                align={'center'}
            />}
        </Group>
    )
}