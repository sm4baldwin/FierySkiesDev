import React, {useState} from 'react'

import FStempMap from '../Components/Templates/FStempMap'
import FStempCharProfile from '../Components/Templates/FStempCharProfile'

import { Characters } from '../Assets/Characters'
import {AppBar, Button, ButtonGroup, Toolbar, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useMediaQuery } from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'

function FierySkies(props) {

    let [kesselliaState, setKesselliaState] = useState(Characters.Kessellia)
    let [forrenState, setForrenState] = useState(Characters.Forren)
    let [clydeState, setClydeState] = useState(Characters.Clyde)
    let [ebenezerState, setEbenezerState] = useState(Characters.Ebenezer)
    let [glonchState, setGlonchState] = useState(Characters.Glonch)
    let [kroyWenState, setKroyWenState] = useState(Characters.KroyWen)
    let [sryKhanState, setSryKhanState] = useState(Characters.SryKhan)
    let [eugenidesState, setEugenidesState] = useState(Characters.Eugenides)
    let [madamePeregrinState, setMadamePeregrinState] = useState(Characters.MadamePeregrin)

    let characterList = {
        Kessellia: {
            state: kesselliaState,
            setState: setKesselliaState,
        },
        Forren: {
            state: forrenState,
            setState: setForrenState,
        },
        SryKhan: {
            state: sryKhanState,
            setState: setSryKhanState,
        },
        Clyde: {
            state: clydeState,
            setState: setClydeState,
        },
        Ebenezer: {
            state: ebenezerState,
            setState: setEbenezerState,
        },
        Glonch: {
            state: glonchState,
            setState: setGlonchState,
        },
        "Kroy Wen": {
            state: kroyWenState,
            setState: setKroyWenState,
        },
        "Madame Peregrin": {
            state: madamePeregrinState,
            setState: setMadamePeregrinState,
        },
        Eugenides: {
            state: eugenidesState,
            setState: setEugenidesState,
        }
    }

    // const theme = useTheme()
    // const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    // const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    const [selectedTab, setSelectedTab] = useState('Map')
    let [selectedCharacter, setSelectedCharacter] = useState("Kessellia")


    return (
        <div style={{ width: '100vw'}}>
            <InGameMenu
                setSelectedTab={setSelectedTab}
            />
            {selectedTab === 'Map' && <FStempMap
                selectedCharacterState={characterList[selectedCharacter].state}
                setSelectedCharacterState={characterList[selectedCharacter].setState}
            
            />}
            {selectedTab === 'Character' && <FStempCharProfile
                characterList={characterList}
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
            
            />}
        </div>
    )
}

const InGameMenu = function(props) {
    const [menuHidden, setMenuHidden] = useState(false)

    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    // const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    return (
        <>
        {menuHidden && <IconButton edge='start' style={{position: smallMedia ? 'static' : 'fixed', top: 'auto', bottom: '0', left: '1.45rem', border: '1px solid grey', boxSizing: 'border-box'}} color="primary" aria-label="menu" onClick={(e) => {
            e.preventDefault()
            setMenuHidden(!menuHidden)
        }}>
            <MenuIcon />
        </IconButton>}
        {!menuHidden && <AppBar position="fixed" color='default' style={{top: 'auto', bottom: '0'}}>
            <Toolbar variant='dense'>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={(e) => {
                    e.preventDefault()
                    setMenuHidden(!menuHidden)
                }}>
                    <MenuIcon />
                </IconButton>
                <ButtonGroup style={{margin: '0 auto'}}>
                    <Button color="primary" onClick={(e) => {
                        e.preventDefault()
                        props.setSelectedTab('Cards')
                    }}>Cards</Button>
                    <Button color="primary" onClick={(e) => {
                        e.preventDefault()
                        props.setSelectedTab('Character')
                    }}>Character</Button>
                    <Button color="primary" onClick={(e) => {
                        e.preventDefault()
                        props.setSelectedTab('Map')
                    }}>Map</Button>
                    <Button color="primary" onClick={(e) => {
                        e.preventDefault()
                        props.setSelectedTab('Journal')
                    }}>Journal</Button>
                </ButtonGroup>
            </Toolbar>
      </AppBar>}
      </>
    )
}

export default FierySkies
