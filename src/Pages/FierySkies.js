import React, {useState} from 'react'
import './FierySkies.css'
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
    let [selectedCharacter, setSelectedCharacter] = useState(null)


    return (
        <div className='fieryskiesContainer'>
            {selectedTab === 'Map' && <FStempMap
                selectedCharacterState={selectedCharacter ? characterList[selectedCharacter].state : null}
                setSelectedCharacterState={selectedCharacter ? characterList[selectedCharacter].setState : null}
                
                />}
            {selectedTab === 'Character' && <FStempCharProfile
                characterList={characterList}
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
                
                />}
            <InGameMenu
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
        </div>
    )
}

const InGameMenu = function(props) {
    const [menuHidden, setMenuHidden] = useState(false)

    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    // const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    return (
        <div style={{height: smallMedia ? '3%' : '5%', width: '100vw'}}>
        {!menuHidden && <AppBar position="fixed" style={{bottom: '0', top: 'auto'}} color={'secondary'} >
            <Toolbar variant='dense'>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={(e) => {
                    e.preventDefault()
                    setMenuHidden(!menuHidden)
                }}>
                    <MenuIcon />
                </IconButton>
                <ButtonGroup disableRipple variant='contained' disableElevation style={{margin: '0 auto'}}>
                    <Button size={smallMedia ? 'small' : 'medium'} color="default" 
                        style={
                            props.selectedTab === "Cards" ? 
                            {backgroundColor: theme.palette.primary.light, color: theme.palette.common.white}
                            : {}}
                        onClick={(e) => {
                            e.preventDefault()
                            props.setSelectedTab('Cards')
                        }}
                    >Cards</Button>
                    <Button size={smallMedia ? 'small' : 'medium'} color="default" 
                        style={
                            props.selectedTab === "Character" ? 
                            {backgroundColor: theme.palette.primary.light, color: theme.palette.common.white}
                            : {}}
                        onClick={(e) => {
                            e.preventDefault()
                            props.setSelectedTab('Character')
                        }}
                    >Character</Button>
                    <Button size={smallMedia ? 'small' : 'medium'} color="default" 
                        style={
                            props.selectedTab === "Map" ? 
                            {backgroundColor: theme.palette.primary.light, color: theme.palette.common.white}
                            : {}}
                        onClick={(e) => {
                            e.preventDefault()
                            props.setSelectedTab('Map')
                        }}
                    >Map</Button>
                    <Button size={smallMedia ? 'small' : 'medium'} color="default" 
                        style={
                            props.selectedTab === "Journal" ? 
                            {backgroundColor: theme.palette.primary.light, color: theme.palette.common.white}
                            : {}}
                        onClick={(e) => {
                            e.preventDefault()
                            props.setSelectedTab('Journal')
                        }}
                    >Journal</Button>
                </ButtonGroup>
            </Toolbar>
      </AppBar>}
      {menuHidden && <IconButton edge='start' style={{position: 'fixed', bottom: '0', top: 'auto', left: '0', right: 'auto', border: '1px solid grey', align: 'left', marginLeft: '.6rem'}} color='primary' aria-label="menu" onClick={(e) => {
          e.preventDefault()
          setMenuHidden(!menuHidden)
      }}>
          <MenuIcon />
      </IconButton>}
      </div>
    )
}

export default FierySkies
