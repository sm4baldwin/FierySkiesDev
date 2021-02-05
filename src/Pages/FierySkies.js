import React, {useState, useEffect, useRef} from 'react'
import useImage from 'use-image'

import FierySkiesTemplate from '../Components/Templates/FierySkiesTemp'

import { Characters } from '../Assets/Characters'


function FierySkies(props) {

    let [wizardState, setWizardState] = useState(Characters.Wizard)
    const wizardRef = useRef(null)
    
    const updateWizard = (dragging, x=null, y=null) => {
        if (dragging==='dragging') {
            setWizardState({...wizardState,
                dragging: true
            })
        } else {
            setWizardState({...wizardState,
                location: {
                    x: x,
                    y: y
                },
                dragging: false
            })
        }
    }

    useEffect(() => {
        if (wizardRef.current) {
            wizardRef.current.start()
        }
        }, [wizardRef])

    useEffect(() => {
        const wizardImage = new window.Image()
        wizardImage.src = Characters.Wizard.image_import
        wizardImage.onload = () => {
            setWizardState({...wizardState, image: wizardImage})
        }
    })
    

    return (
        <div>
            <FierySkiesTemplate 
                wizardState={wizardState}
                updateWizard={updateWizard}
                wizardRef={wizardRef}
            
            />
        </div>
    )
}

export default FierySkies