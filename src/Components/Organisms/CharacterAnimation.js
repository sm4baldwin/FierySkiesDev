import React, {useRef, useEffect} from 'react'
import {Sprite, Group, Text} from 'react-konva'
import useImage from 'use-image'
import { useMediaQuery } from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'


export const CharacterSelection = (props) => {
    const characterRef = useRef(null)
    const [characterImage] = useImage(props.characterState.sprite.image_import)
    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    let scale = smallMedia ? 0.8 : mediumMedia ? 0.9 : 1

    useEffect(() => {
        if (characterRef.current) {
            characterRef.current.start()
        }
    }, [characterRef])

    useEffect(() => {
        if (props.selectedCharacter !== props.characterState.name && props.characterState.sprite.selectionAnimation === 'attack1') {
            props.setCharacterState({...props.characterState, 
                sprite: {
                    ...props.characterState.sprite,
                    selectionAnimation: 'idle',
                }
            })
        } else if (props.selectedCharacter === props.characterState.name && props.characterState.sprite.selectionAnimation !== 'attack1') {
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
            y={79}
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
                scaleX={props.characterState.sprite.scale*props.spriteScale}
                scaleY={props.characterState.sprite.scale*props.spriteScale}
                onMouseOver={() => {
                    if (props.characterState.sprite.selectionAnimation !== 'attack1') {
                        props.setCharacterState({...props.characterState, 
                            sprite: {
                                ...props.characterState.sprite,
                                toggledStates: {
                                    ...props.characterState.sprite.toggledStates,
                                    mouseover: true,
                                },
                                prevSelectionAnimation: props.characterState.sprite.selectionAnimation,
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
                    props.setSelectedCharacter(props.characterState.name)
                }}
                onTap={() => {
                    props.setSelectedCharacter(props.characterState.name)
                }}
            />
            <Text 
                text={`${props.characterState.name}`}
                fontSize={smallMedia ? 10 : mediumMedia ? 12 : 14}
                y={props.characterState.sprite.spriteHeight * props.characterState.sprite.scale * scale}
                x={props.characterState.sprite.labelOffset * scale}
                align={'center'}
            />
        </Group>
    )
}

export const CharacterAnimation = (props) => {
    const characterRef = useRef(null)
    const [characterImage] = useImage(props.characterState.sprite.image_import)
    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    let scale = smallMedia ? 0.5 : mediumMedia ? 0.8 : 1

    useEffect(() => {
        if (characterRef.current) {
            characterRef.current.start()
        }
    }, [characterRef])

    return (
        <Group
            x={(props.characterState.sprite.spriteLocation.x * scale + props.mapDragOffset.x) }
            y={(props.characterState.sprite.spriteLocation.y * scale + props.mapDragOffset.y)}
            draggable={true}
            
            dragBoundFunc={(pos) => {

                let scaleLeft =
                    (props.ellipseRadius) / Math.sqrt(Math.pow(pos.x - props.center.centerLeft.x, 2) + Math.pow(pos.y - props.center.centerLeft.y, 2))
                let scaleRight =
                    (props.ellipseRadius) / Math.sqrt(Math.pow(pos.x - props.center.centerRight.x, 2) + Math.pow(pos.y - props.center.centerRight.y, 2));

                    if (scaleLeft < 1 && pos.x < props.center.centerLeft.x) {
                        return {
                            y: Math.round((pos.y - props.center.centerLeft.y) * scaleLeft + props.center.centerLeft.y),
                            x: Math.round((pos.x - props.center.centerLeft.x) * scaleLeft + props.center.centerLeft.x),
                        }
                    } else if (scaleRight < 1 && pos.x > props.center.centerRight.x) {
                        return {
                            y: Math.round((pos.y - props.center.centerRight.y) * scaleRight + props.center.centerRight.y),
                            x: Math.round((pos.x - props.center.centerRight.x) * scaleRight + props.center.centerRight.x),
                        }
                    } else if (pos.y < props.center.centerLeft.y - props.ellipseRadius) {
                        return {
                            y: props.center.centerLeft.y - props.ellipseRadius,
                            x: pos.x,
                            
                        }
                    } else if (pos.y > props.center.centerLeft.y + props.ellipseRadius) {
                        return {
                            y: props.center.centerLeft.y + props.ellipseRadius,
                            x: pos.x,
                        }
                    }
                    else return pos


            }}
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
                            x: (e.target.x() - props.mapDragOffset.x)/scale,
                            y: (e.target.y() - props.mapDragOffset.y)/scale
                        },
                        toggledStates: {
                            mouseover: false,
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
                shadowOffset={{x: 5*scale, y: 15*scale}}
                shadowBlur={20}
                shadowOpacity={30}
                x={0}
                y={0}
                scaleX={props.characterState.sprite.scale*scale}
                scaleY={props.characterState.sprite.scale*scale}
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
                onTap={() => {
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
                fontSize={smallMedia ? 10 : mediumMedia ? 12 : 14}
                y={props.characterState.sprite.spriteLocation.y >= 600 ? Math.abs(props.characterState.sprite.labelOffset * scale) : props.characterState.sprite.spriteHeight * props.characterState.sprite.scale * scale}
                x={props.characterState.sprite.labelOffset * scale}
                align={'center'}
            />}
        </Group>
    )
}