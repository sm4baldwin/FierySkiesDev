import React, {useEffect, useState} from 'react'
import {Stage, Layer, Image, Group} from 'react-konva'
import {CharacterAnimation} from '../Organisms/CharacterAnimation'
import Thracia from '../../Assets/Other/Thracia.jpg'
import useImage from 'use-image'
import { useMediaQuery } from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import useDimensions from 'react-cool-dimensions'


export default function FStempMap(props) {
    const [ThraciaImage] = useImage(Thracia)
    const { width, height, observe } = useDimensions()
    
    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    
    let scale = (smallMedia && (height < 500)) ? {x: 0.5, y: 0.5} : ((smallMedia || mediumMedia) && (height < 700)) ? {x: 0.8, y: 0.8} : {x: 1, y: 1}

    let stageWidth = 2222 * scale.x
    let stageHeight = 1250 * scale.y
    let ellipseWidth = width > 0 ? width - 2 : 0
    let ellipseHeight = height > 0 ? height - 2 : 0
    let ellipseCenter = {
        x: ellipseWidth/2 + 1,
        y: ellipseHeight/2 + 1
    }
    const [mapDrag, setMapDrag] = useState({x: 0 - 550 * scale.x, y: -100 * scale.y})

    return (
        <div style={{height: `98%`, width: `95%`, margin: '0 auto', padding: '1% 0'}} ref={observe}>
            <Stage
                width={width}
                height={height}
                x={0}
                y={0}
            >
                <Layer>
                    <Group
                        clipFunc={(ctx) => {
                            ctx.beginPath()
                            ctx.ellipse(ellipseCenter.x, ellipseCenter.y, ellipseWidth/2, ellipseHeight/2, 0, 0, 2 * Math.PI)
                            ctx.stroke()
                        }}
                        position={{x: 0, y: 0}}

                        >
                            <Image 
                                draggable
                                image={ThraciaImage} x={mapDrag.x} y={mapDrag.y}
                                scale={scale}
                                onDragMove={(e) => {
                                    setMapDrag({x: e.target.x(), y: e.target.y()})
                                }}
                                dragBoundFunc={(pos) => {
                                    let radius = (stageHeight - height)/2
                                    let xBound = -(stageWidth - width)
                                    let yBound = -(2*radius)
                                    let centerLeft = {x: -radius, y: -radius}
                                    let centerRight = {x: xBound + radius, y: -radius}
                                    let scaleLeft =
                                    (radius) / Math.sqrt(Math.pow(pos.x - (centerLeft.x), 2) + Math.pow(pos.y - centerLeft.y, 2))
                                    let scaleRight =
                                    (radius) / Math.sqrt(Math.pow(pos.x - (centerRight.x), 2) + Math.pow(pos.y - centerRight.y, 2))

                                    if (scaleLeft < 1 && pos.x > (centerLeft.x)) {
                                        return {
                                            y: Math.round((pos.y - centerLeft.y) * scaleLeft + centerLeft.y),
                                            x: Math.round((pos.x - centerLeft.x) * scaleLeft + centerLeft.x),
                                        }
                                    }
                                    if (scaleRight < 1 && pos.x < (centerRight.x)) {
                                        return {
                                            y: Math.round((pos.y - centerRight.y) * scaleRight + centerRight.y),
                                            x: Math.round((pos.x - centerRight.x) * scaleRight + centerRight.x),
                                        }
                                    } else if (pos.y > 0) {
                                        return {
                                            y: 0,
                                            x: pos.x,
                                        }
                                    } else if (pos.y < yBound) {
                                        return {
                                            y: yBound,
                                            x: pos.x,
                                        }
                                    }
                                    else return pos
                                }}
                            />
                            {props.selectedCharacterState && 
                            <CharacterAnimation
                                characterState={props.selectedCharacterState}
                                setCharacterState={props.setSelectedCharacterState}
                                mapDragOffset={mapDrag}
                                ellipseRadius={stageHeight/2 - 50 * scale.x}

                                center={{
                                    centerLeft: {
                                        x: stageWidth/2 + mapDrag.x + (-185) * scale.x,
                                        y: stageHeight/2 + mapDrag.y - 50 * scale.y},
                                    centerRight: {
                                        x: stageWidth/2 + mapDrag.x + (185) * scale.x,
                                        y: stageHeight/2 + mapDrag.y - 50 * scale.y},
                                    }}
                            />}
                        </Group>
                        
                </Layer>
            </Stage>
        </div>
    )
}