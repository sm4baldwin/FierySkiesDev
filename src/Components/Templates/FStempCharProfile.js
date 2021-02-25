import React, {useEffect, useState} from 'react'
import {Stage, Layer} from 'react-konva'
import { useMediaQuery } from '@material-ui/core'
import {Grid, Paper} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'

import {CharacterSelection} from '../Organisms/CharacterAnimation'

function ActiveCharacterProfile(props) {
    const [displayedCharacter, setDisplayedCharacter] = useState(0)
    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    // const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    

    return (
        <>
        {/* {props.selectedCharacter &&
            <CharacterProfile
                characterList={props.characterList}
            />
        } */}

        {!props.selectedCharacter && <>
            <Grid container>
                <Grid item><SelectionList
                    characterList={props.characterList}
                    selectedCharacter={props.selectedCharacter}
                    setSelectedCharacter={props.setSelectedCharacter}
                    displayedCharacter={displayedCharacter}
                /></Grid>
            </Grid>
        </>}
        </>
    )
}

function SelectionList(props) {
    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    return (
        <div style={{width: '100%', height: '100%'}}>
            <Stage width={smallMedia ? 300 : mediumMedia ? 350 : 400} height={smallMedia ? 200 : mediumMedia ? 320 : 400}>
                <Layer>
                    {
                            <CharacterSelection
                                characterState={Object.entries(props.characterList)[props.displayedCharacter][1].state}
                                setCharacterState={Object.entries(props.characterList)[props.displayedCharacter][1].setState}
                                setSelectedCharacter={props.setSelectedCharacter}
                                selectedCharacter={props.selectedCharacter}
                                spriteScale={smallMedia ? 0.8 : mediumMedia ? 0.9 : 1}
                                font={smallMedia ? 10 : mediumMedia ? 12 : 14}
                            />
                    }
                </Layer>
            </Stage>
        </div>
    )
}


export default ActiveCharacterProfile