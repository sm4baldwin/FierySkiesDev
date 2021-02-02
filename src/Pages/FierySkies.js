import React, {useCallback, useState} from 'react'

import FierySkiesTemplate from '../Components/Templates/FierySkiesTemp'
import {
    CanvasCornerBubbles, CanvasConstRectangle, CanvasCornerCircle
} from '../Components/Molecules/CanvasDraws'
import IdleWizard from '../Assets/PixelArt/EvilWizard/Idle.png'

function FierySkies(props) {
    // let [wizardState, setWizardState] = useState(
    //     {
    //     mode: 'idle',
    //     location: [200, 200],
    //     })    

    const testDraw = useCallback((ctx, framecount) => {
        ctx.canvas.width = Math.round(ctx.canvas.parentNode.getBoundingClientRect().width)
        ctx.canvas.height = Math.round(ctx.canvas.parentNode.getBoundingClientRect().height)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        
        // Call individual draw elements based on what is desired
        // CanvasCornerCircle(ctx, framecount)
        // CanvasCornerBubbles(ctx, framecount)
        // CanvasConstRectangle(ctx)
        ctx.drawImage(IdleWizard, 1, 1, 25, 25, 200, 200, 25, 25)
        //CharacterWizard(ctx, framecount, characters.wizard[wizardState.mode], wizardState.location)
        // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }, [])

    return (
        <div>
            <div>
                <p>
                    Testing
                </p>
            </div>
            <FierySkiesTemplate draw={testDraw} />

        </div>
    )
}

export default FierySkies