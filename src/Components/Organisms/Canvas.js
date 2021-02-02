import React from 'react'
import useCanvas from '../../Assets/customHooks/useCanvas'

const Canvas = props => {

    const {draw, ...rest} = props
    const canvasRef = useCanvas(draw)

    return (
        <div style={{padding: '0', position: 'relative', width: rest.cvWidth, height: rest.cvHeight, margin: '0 auto'}}>
            <canvas style={{display: 'block',  boxSizing: 'border-box'}} ref={canvasRef} />
        </div>
    )
}

export default Canvas