import Kessel_Image_Import from '../Assets/PixelArt/Kessel.png'
import Forren_Image_Import from '../Assets/PixelArt/Forren.png'
//These are the default measurements for the pixelized sprite animations
let x_increment = 212.5
let y_increment = 200
let x_base = 60
let y_base = 15
let x_width = 150
let y_height = 130
let starting_location = {
    x: 600,
    y: 350,
    z: 0
}

export const Characters = {
    Kessel: {
        animation: 'idle',
        prevAnimation: 'idle',
        animationList: ['idle', 'run', 'leap', 'jump', 'fall', 'attack1', 'attack2', 'takeHit', 'die'],
        location: {
            x: starting_location.x,
            y: starting_location.y,
            z: 0
        },
        animations: {
            idle: [
                0 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
            ],
            run: [
                0 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
            ],
            leap: [
                0 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                0 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                0 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                0 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
            ],
            jump: [
                0 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
            ],
            fall: [
                2 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 2 * y_increment + y_base, x_width, y_height,
            ],
            attack1: [
                0 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
            ],
            attack2: [
                0 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 4 * y_increment + y_base, x_width, y_height,
            ],
            takeHit: [
                0 * x_increment + x_base, 5 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 5 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 5 * y_increment + y_base, x_width, y_height,
            ],
            die: [
                0 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
            ],

        },
        image_import: Kessel_Image_Import,
        image: null,
        
        toggledStates: {
            mouseover: false,
            isDragging: false,
        }
    },
    Forren: {
        animation: 'idle',
        prevAnimation: 'idle',
        animationList: ['idle', 'run', 'attack1', 'takeHit', 'die'],
        location: {
            x: starting_location.x,
            y: starting_location.y,
            z: 0
        },
        animations: {
            idle: [
                0 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 0 * y_increment + y_base, x_width, y_height,
            ],
            run: [
                0 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 1 * y_increment + y_base, x_width, y_height,
            ],
            attack1: [
                0 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                5 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                6 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
                7 * x_increment + x_base, 3 * y_increment + y_base, x_width, y_height,
            ],
            takeHit: [
                0 * x_increment + x_base, 5 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 5 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 5 * y_increment + y_base, x_width, y_height,
            ],
            die: [
                0 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                1 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                2 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                3 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
                4 * x_increment + x_base, 6 * y_increment + y_base, x_width, y_height,
            ],

        },
        image_import: Forren_Image_Import,
        image: null,
        
        toggledStates: {
            mouseover: false,
            isDragging: false,
        }
    },

}