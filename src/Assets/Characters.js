import image_WizardIdle from '../Assets/PixelArt/EvilWizard/Idle.png'

export const Characters = {
    Wizard: {
        animation: 'idle',
        location: {
            x: Math.floor(Math.random() * 1200) + 15,
            y: Math.floor(Math.random() * 600) + 10,
            z: 0
        },
        animations: {
            idle: [
                105, 40, 65, 130,
                355, 40, 65, 130,
                605, 40, 65, 130,
                855, 40, 65, 130,
                1105, 40, 65, 130,
                1355, 40, 65, 130,
                1605, 40, 65, 130,
                1855, 40, 65, 130,
            ]
        },
        image_import: image_WizardIdle,
        image: null,
        isDragging: false
    }   
}