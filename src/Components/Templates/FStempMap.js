import React, {useState, useEffect} from 'react'
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

    let scale = smallMedia ? {x: 0.5, y: 0.5} : mediumMedia ? {x: 0.8, y: 0.8} : {x: 1, y: 1}

    let stageWidth = 2222 * scale.x
    let stageHeight = 1250 * scale.y
    let ellipseWidth = width
    let ellipseHeight = height
    let ellipseCenter = {
        x: width/2,
        y: height/2
    }

    const [mapDrag, setMapDrag] = useState({x: 0 - 350 * scale.x, y: 0 - 180 * scale.y})


    return (
        <div style={{display: 'flex', flexDirection: 'row', height: `90vh`, width: `95vw`, margin: '1vh auto'}} ref={observe}>
            <Stage
                width={width}
                height={height}
                x={0}
                y={0}
                
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
                                ellipseRadius={ellipseHeight/2}

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
                
            </Stage>
        </div>
    )
}


// function Map(props) {
//     return (
//         <Stage
//             width={stageWidth}
//             height={stageHeight}
//             x={0}
//             y={0}
//             onTouchStart={(e) => {
//                 e.evt.preventDefault()
//             }}
//             onTouchMove={(e) => {
//                 e.evt.preventDefault()
//             }}
            
//         >
//             <Layer
//                 style={{overflow: 'scroll'}}
//             >
//                 <Group
//                     clipFunc={(ctx) => {
//                         ctx.beginPath()
//                         ctx.ellipse(ellipseCenter.x, ellipseCenter.y, ellipseWidth/2, ellipseHeight/2, 0, 0, 2 * Math.PI)
//                         ctx.stroke()
                        
//                         ;
//                     }}
//                     position={{x: 0, y: 0}}

//                     >
//                         <Image 
//                             draggable
//                             image={ThraciaImage} x={mapDrag.x} y={mapDrag.y}
//                             onDragMove={(e) => {
//                                 setMapDrag({x: e.target.x(), y: e.target.y()})

//                             }}
//                             dragBoundFunc={(pos) => {
//                                 let new_x
//                                 let new_y
//                                 switch (true) {
//                                     case pos.x > -300:
//                                         new_x = -300
//                                         break
//                                     case pos.x < -(stageWidth - ellipseWidth - 250):
//                                         new_x = -(stageWidth - ellipseWidth - 250)
//                                         break
//                                     default:
//                                         new_x = pos.x
//                                         break
//                                 }
//                                 switch (true) {
//                                     case pos.y > 25:
//                                         new_y = 25
//                                         break
//                                     case pos.y < -(stageHeight - ellipseHeight - 25):
//                                         new_y = -(stageHeight - ellipseHeight - 25)
//                                         break
//                                     default:
//                                         new_y = pos.y
//                                         break
//                                 }
//                                 return {
//                                     x: new_x,
//                                     y: new_y
//                                 }
//                             }}
//                         />
//                         {selectedCharacter && 
//                         <CharacterAnimation
//                             characterState={characterList[selectedCharacter].state}
//                             setCharacterState={characterList[selectedCharacter].setState}
//                             mapDragOffset={mapDrag}
//                             ellipseRadius={stageHeight/2 - 50}

//                             center={{
//                                 centerLeft: {
//                                     x: ellipseWidth/2 + mapDrag.x + 500 - 235,
//                                     y: ellipseHeight/2 + mapDrag.y + 190},
//                                 centerRight: {
//                                     x: ellipseWidth/2 + mapDrag.x + 500 + 170,
//                                     y: ellipseHeight/2 + mapDrag.y + 190},
//                                 }}
//                         />}
//                     </Group>
                    
//             </Layer>
//             <Layer><Circle x={ellipseWidth/2 + mapDrag.x + 500} y={ellipseHeight/2 + mapDrag.y + 250} radius={1} fillEnabled={true} fill={black}/></Layer>
//         </Stage>
//     )
// }
