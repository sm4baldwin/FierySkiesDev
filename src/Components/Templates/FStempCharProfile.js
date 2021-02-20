import React from 'react'
import {Stage, Layer} from 'react-konva'
import { useMediaQuery } from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'

import {CharacterSelection} from '../Organisms/CharacterAnimation'

function ActiveCharacterProfile(props) {

    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    // const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    

    return (
        <>
        {!smallMedia && <SelectionList
            characterList={props.characterList}
            selectedCharacter={props.selectedCharacter}
            setSelectedCharacter={props.setSelectedCharacter}
        />}
        </>
    )
}

function SelectionList(props) {
    return (
        <Stage width={1000} height={1000}>
            <Layer>
                {
                Object.entries(props.characterList).map((character, order) => {
                    return (
                        <CharacterSelection
                            characterState={character[1].state}
                            setCharacterState={character[1].setState}
                            setSelectedCharacter={props.setSelectedCharacter}
                            selectedCharacter={props.selectedCharacter}
                            order={order}
                            key={order}
                        />
                    )
                })
                }
            </Layer>
        </Stage>
    )
}

export default ActiveCharacterProfile