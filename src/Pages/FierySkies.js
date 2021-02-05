import React, {useState, useEffect, useRef} from 'react'
import useImage from 'use-image'

import FierySkiesTemplate from '../Components/Templates/FierySkiesTemp'

import { Characters } from '../Assets/Characters'


function FierySkies(props) {

    let [wizardState, setWizardState] = useState(Characters.Wizard)
    let [refReady, setRefReady] = useState(false)
    const wizardRef = useRef(null)
    
    useEffect(() => {
        // const wizardImage = new window.Image()
        // wizardImage.src = wizardState.image_import
        // wizardImage.onload = () => {
        //     setWizardState({...wizardState, image: wizardImage})
        //     setRefReady(true)
        // }
        // if (refReady) {
        //     wizardRef.current.start()
        // }
        console.log(wizardRef)
        }, [])

    return (
        <div>
            <div style={{margin: '1rem'}}>

            </div>
            {refReady && <FierySkiesTemplate 
                wizard={wizardState}
                wizardRef={wizardRef}
            
            />}
        </div>
    )
}

export default FierySkies