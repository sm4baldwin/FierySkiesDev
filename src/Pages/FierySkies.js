import React, {useState, useEffect, useRef} from 'react'
import useImage from 'use-image'

import FierySkiesTemplate from '../Components/Templates/FierySkiesTemp'

import { Characters } from '../Assets/Characters'
import Thracia from '../Assets/Other/Thracia.jpg'


function FierySkies(props) {

    let [kesselState, setKesselState] = useState(Characters.Kessel)
    const kesselRef = useRef(null)
    const [ThraciaImage] = useImage(Thracia)
    
    useEffect(() => {
        if (kesselRef.current) {
            kesselRef.current.start()
        }
        }, [kesselRef])

    useEffect(() => {
        const kesselImage = new window.Image()
        kesselImage.src = Characters.Kessel.image_import
        kesselImage.onload = () => {
            setKesselState({...kesselState, image: kesselImage})
        }
        
    }, [])
    

    return (
        <div style={{margin: '2rem auto', width: '1284px', height: '724px', }}>
            <FierySkiesTemplate 
                kesselState={kesselState}
                setKesselState={setKesselState}
                kesselRef={kesselRef}
                map={ThraciaImage}
            
            />
        </div>
    )
}

export default FierySkies