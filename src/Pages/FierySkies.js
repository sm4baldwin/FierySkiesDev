import React, {useState, useEffect} from 'react'

import FierySkiesTemplate from '../Components/Templates/FierySkiesTemp'

import { Characters } from '../Assets/Characters'



function FierySkies(props) {

    let [kesselState, setKesselState] = useState(Characters.Kessel)
    
    

    return (
        <div style={{margin: '2rem auto', width: '1284px', height: '724px', }}>
            <FierySkiesTemplate 
                kesselState={kesselState}
                setKesselState={setKesselState}
            
            />
        </div>
    )
}

export default FierySkies