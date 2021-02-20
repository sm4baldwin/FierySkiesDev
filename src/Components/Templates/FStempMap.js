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

    let ellipseWidth = width
    let ellipseHeight = height
    let ellipseCenter = {
        x: width/2 + 1,
        y: height/2 + 1
    }
    const stageWidth = 2222
    const stageHeight = 1250

    const [mapDrag, setMapDrag] = useState({x: -500, y: -250})

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: `90vh`, width: `95vw`, margin: '1vh auto'}} ref={observe}>
            <Stage
                width={ellipseWidth + 2}
                height={ellipseHeight + 2}
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
                            {props.selectedCharacterState && 
                            <CharacterAnimation
                                characterState={props.selectedCharacterState}
                                setCharacterState={props.setSelectedCharacterState}
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
                
            </Stage>
        </div>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: 1300,
      height: 750,
    })
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
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
