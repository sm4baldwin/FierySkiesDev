import React from 'react'
import {Stage, Layer, Text, Sprite, Group} from 'react-konva'

export default function FierySkiesTemplate(props) {
    return (
        <Stage width={1300} height={700}>
            <Layer>
                <Text 
                    text={'[x: ' + props.wizardState.location.x + ', y: ' + props.wizardState.location.y + ']'}
                    x={props.wizardState.location.x - 25}
                    y={props.wizardState.location.y - 10}
                />
                <Group>
                    <Sprite
                        ref={props.wizardRef}
                        image={props.wizardState.image}
                        animation={props.wizardState.animation}
                        frameRate={10}
                        frameIndex={0}
                        animations={props.wizardState.animations}
                        x={props.wizardState.location.x}
                        y={props.wizardState.location.y}
                        scaleX={props.wizardState.dragging ? .75: 0.5}
                        scaleY={props.wizardState.dragging ? .75: 0.5}
                        draggable={true}
                        onDragStart={() => {
                            props.updateWizard('dragging')
                        }}
                        onDragEnd={e => {
                            props.updateWizard('dropping', e.target.x(), e.target.y())
                        }}
                    />
                </Group>
            </Layer>
        </Stage>
    )
}