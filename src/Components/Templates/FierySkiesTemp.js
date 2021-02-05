import React from 'react'
import {Stage, Layer, Text, Sprite, Group} from 'react-konva'

export default function FierySkiesTemplate(props) {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text  text="This is my first canvas layer"/>
                <Group>
                    <Sprite
                        ref={props.wizardRef}
                        image={props.wizard.image}
                        animation={props.wizard.animation}
                        frameRate={2}
                        frameIndex={0}
                        animations={props.wizard.animations}
                        x={props.wizard.location[0]}
                        y={props.wizard.location[1]}

                    />
                </Group>
            </Layer>
        </Stage>
    )
}