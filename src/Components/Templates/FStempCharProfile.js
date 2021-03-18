import React, {useEffect, useState} from 'react'
import {Stage, Layer} from 'react-konva'
import { useMediaQuery } from 'react-responsive'
import {Grid} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import {CharacterSelection} from '../Organisms/CharacterAnimation'
import mediumScroll from '../../Assets/Other/papyrus_medium_scroll.png'
import largeSidewaysScroll from '../../Assets/Other/papyrus_sideways_scroll.png'
import useDimensions from 'react-cool-dimensions'

function ActiveCharacterProfile(props) {
    const [displayedCharacter, setDisplayedCharacter] = useState(0)
    // const theme = useTheme()
    // const smallMedia = useMediaQuery({ query: `(max-width: ${theme.breakpoints['sm']}px)` })
    // const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    

    return (
        <>
        {/* {props.selectedCharacter &&
            <CharacterProfile
                characterList={props.characterList}
            />
        } */}

        {/* {!props.selectedCharacter && <> */}
            <Grid container direction='row' style={{backgroundImage: `url(${largeSidewaysScroll})`, backgroundRepeat: 'no-repeat', backgroundSize: '95%', height: '100%'}}>
                <Grid item style={{margin: '15vh 0 0 15vw', border: '1px solid black', height: '115px', borderRadius: '10%'}}>
                        <SelectionList
                            characterList={props.characterList}
                            selectedCharacter={props.selectedCharacter}
                            setSelectedCharacter={props.setSelectedCharacter}
                            displayedCharacter={displayedCharacter}
                        />
                </Grid>
            </Grid>
        {/* </>} */}
        </>
    )
}

function SelectionList(props) {
    const theme = useTheme()
    let smallMedia = useMediaQuery({ query: `(max-width: ${theme.breakpoints['sm']}px)` })
    let mediumMedia = useMediaQuery({ query: `(max-width: ${theme.breakpoints['md']}px)` }) && !smallMedia
    let [papyrusWidth, setPapyrusWidth] = useState('80px')

    useEffect(() => {
        if (smallMedia) {
            setPapyrusWidth('80')
        } else if (mediumMedia) {
            setPapyrusWidth('90')
        } else {
            setPapyrusWidth('100')
        }
    }, [smallMedia, mediumMedia])

    return (
        <div 
        style={{
            // backgroundImage: `url(${mediumScroll})`, backgroundRepeat: 'no-repeat', backgroundSize: `${papyrusWidth*.9}px`, 
            width: `${papyrusWidth}px`, height: `${papyrusWidth}px`}}
        >
            <Stage width={papyrusWidth} height={papyrusWidth}>
                <Layer>
                    {
                            <CharacterSelection
                                characterState={Object.entries(props.characterList)[props.displayedCharacter][1].state}
                                setCharacterState={Object.entries(props.characterList)[props.displayedCharacter][1].setState}
                                setSelectedCharacter={props.setSelectedCharacter}
                                selectedCharacter={props.selectedCharacter}
                                spriteScale={smallMedia ? 0.8 : mediumMedia ? 0.9 : 1}
                                font={smallMedia ? 10 : mediumMedia ? 12 : 14}
                                stageWidth={papyrusWidth}
                            />
                    }
                </Layer>
            </Stage>
        </div>
    )
}


export default ActiveCharacterProfile