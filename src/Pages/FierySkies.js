import React, {useState} from 'react'

import FierySkiesTemplate from '../Components/Templates/FierySkiesTemp'

import { Characters } from '../Assets/Characters'



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


    return (
        <div style={{ width: '100vw', overflow: 'hidden'}}>
            <FierySkiesTemplate 
                kesselliaState={kesselliaState}
                setKesselliaState={setKesselliaState}
                forrenState={forrenState}
                setForrenState={setForrenState}
                sryKhanState={sryKhanState}
                setSryKhanState={setSryKhanState}
                clydeState={clydeState}
                setClydeState={setClydeState}
                ebenezerState={ebenezerState}
                setEbenezerState={setEbenezerState}
                glonchState={glonchState}
                setGlonchState={setGlonchState}
                kroyWenState={kroyWenState}
                setKroyWenState={setKroyWenState}
                madamePeregrinState={madamePeregrinState}
                setMadamePeregrinState={setMadamePeregrinState}
                eugenidesState={eugenidesState}
                setEugenidesState={setEugenidesState}
            
            />
        </div>
    )
}

export default FierySkies