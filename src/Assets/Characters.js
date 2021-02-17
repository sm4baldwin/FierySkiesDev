import Kessellia_Image_Import from '../Assets/PixelArt/Kessellia.png'
import Forren_Image_Import from '../Assets/PixelArt/Forren.png'
import Clyde_Image_Import from '../Assets/PixelArt/Clyde.png'
import Ebenezer_Image_Import from '../Assets/PixelArt/Ebenezer.png'
import Glonch_Image_Import from '../Assets/PixelArt/Glonch.png'
import KroyWen_Image_Import from '../Assets/PixelArt/KroyWen.png'
import SryKhan_Image_Import from '../Assets/PixelArt/SryKhan.png'
import MadamePeregrin_Image_Import from '../Assets/PixelArt/MadamePeregrin.png'
import Eugenides_Image_Import from '../Assets/PixelArt/Eugenides.png'
//These are the default measurements for the pixelized sprite animations
let starting_location = {
    x: 1150,
    y: 550,
    z: 0
}

let x_increment = 200
let y_increment = 200
let x_base = 60
let y_base = 15
let x_width = 150
let y_height = 130

let kesselliaBase_x = x_base
let kesselliaBase_y = y_base
let kesselliaHeight = y_height
let kesselliaWidth = x_width
let kesselliaIncrement_x = x_increment + 12.5
let kesselliaIncrement_y = y_increment

let clydeBase_x = x_base - 60
let clydeBase_y = y_base - 15
let clydeHeight = y_height + 60
let clydeWidth = x_width + 50
let clydeIncrement_x = x_increment + 5.27
let clydeIncrement_y = y_increment

let forrenBase_x = x_base - 15
let forrenBase_y = y_base - 15
let forrenHeight = y_height
let forrenWidth = x_width - 15
let forrenIncrement_x = x_increment - 18.75
let forrenIncrement_y = y_increment

let ebenezerBase_x = x_base - 15
let ebenezerBase_y = y_base - 25
let ebenezerHeight = y_height + 30
let ebenezerWidth = x_width + 45
let ebenezerIncrement_x = x_increment + 43.25
let ebenezerIncrement_y = y_increment

let glonchBase_x = x_base - 25
let glonchBase_y = y_base
let glonchHeight = y_height - 10
let glonchWidth = x_width + 45
let glonchIncrement_x = x_increment
let glonchIncrement_y = y_increment

let KroyWenBase_x = x_base - 30
let KroyWenBase_y = y_base - 15
let KroyWenHeight = y_height + 10
let KroyWenWidth = x_width + 5
let KroyWenIncrement_x = x_increment - 22
let KroyWenIncrement_y = y_increment

let SryKhanBase_x = x_base - 30
let SryKhanBase_y = y_base - 15
let SryKhanHeight = y_height + 20
let SryKhanWidth = x_width + 20
let SryKhanIncrement_x = x_increment
let SryKhanIncrement_y = y_increment

let MadamePeregrinBase_x = x_base - 30
let MadamePeregrinBase_y = y_base - 15
let MadamePeregrinHeight = y_height + 10
let MadamePeregrinWidth = x_width + 20
let MadamePeregrinIncrement_x = x_increment
let MadamePeregrinIncrement_y = y_increment

let EugenidesBase_x = x_base - 30
let EugenidesBase_y = y_base - 15
let EugenidesHeight = y_height + 10
let EugenidesWidth = x_width + 20
let EugenidesIncrement_x = x_increment
let EugenidesIncrement_y = y_increment

export const Characters = {
    Kessellia: {
        name: 'Kessellia',
        sprite: {
            scale: .6,
            spriteHeight: kesselliaHeight,
            spriteWidth: kesselliaWidth,
            labelOffset: 0,
            xBoundRightOffset: 4,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionOffset: 12,
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            animationList: ['idle', 'run', 'leap', 'jump', 'fall', 'attack1', 'attack2', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    4 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    5 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    6 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    7 * kesselliaIncrement_x + kesselliaBase_x, 0 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                run: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    4 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    5 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    6 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    7 * kesselliaIncrement_x + kesselliaBase_x, 1 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                leap: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    0 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    0 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    0 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                jump: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                fall: [
                    2 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 2 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                attack1: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    4 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    5 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    6 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    7 * kesselliaIncrement_x + kesselliaBase_x, 3 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                attack2: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    4 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    5 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    6 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    7 * kesselliaIncrement_x + kesselliaBase_x, 4 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                takeHit: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 5 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 5 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 5 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],
                die: [
                    0 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    1 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    2 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    3 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    4 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    5 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    6 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                    6 * kesselliaIncrement_x + kesselliaBase_x, 6 * kesselliaIncrement_y + kesselliaBase_y, kesselliaWidth, kesselliaHeight,
                ],

            },
            image_import: Kessellia_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        }
    },
    Forren: {
        name: 'Forren',
        sprite: {
            scale: 0.5,
            spriteHeight: forrenHeight,
            spriteWidth: forrenWidth,
            labelOffset: 7,
            xBoundRightOffset: 10,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionOffset: 12,
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            animationList: ['idle', 'run', 'attack1', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    1 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    2 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    3 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    5 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    6 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    7 * forrenIncrement_x + forrenBase_x, 0 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                ],
                run: [
                    0 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    1 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    2 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    3 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    5 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    6 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    7 * forrenIncrement_x + forrenBase_x, 1 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                ],
                attack1: [
                    0 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    1 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    2 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    3 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    5 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    6 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    7 * forrenIncrement_x + forrenBase_x, 2 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                ],
                takeHit: [
                    0 * forrenIncrement_x + forrenBase_x, 3 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    1 * forrenIncrement_x + forrenBase_x, 3 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    2 * forrenIncrement_x + forrenBase_x, 3 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    3 * forrenIncrement_x + forrenBase_x, 3 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                ],
                die: [
                    0 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    1 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    2 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    3 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                    4 * forrenIncrement_x + forrenBase_x, 4 * forrenIncrement_y + forrenBase_y, forrenWidth, forrenHeight,
                ],

            },
            image_import: Forren_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        }
    },
    Clyde: {
        name: 'Clyde',
        sprite: {
            scale: 0.4,
            spriteHeight: clydeHeight,
            spriteWidth: clydeWidth,
            labelOffset: 20,
            xBoundRightOffset: -4,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionOffset: 0,
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            animationList: ['idle', 'run', 'attack1', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * clydeIncrement_x + clydeBase_x, 0 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    1 * clydeIncrement_x + clydeBase_x, 0 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    2 * clydeIncrement_x + clydeBase_x, 0 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    3 * clydeIncrement_x + clydeBase_x, 0 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    4 * clydeIncrement_x + clydeBase_x, 0 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                ],
                run: [
                    0 * clydeIncrement_x + clydeBase_x, 1 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    1 * clydeIncrement_x + clydeBase_x, 1 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    2 * clydeIncrement_x + clydeBase_x, 1 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    3 * clydeIncrement_x + clydeBase_x, 1 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    4 * clydeIncrement_x + clydeBase_x, 1 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                ],
                attack1: [
                    0 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    1 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    2 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    3 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    4 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    5 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    6 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    7 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    8 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    9 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    10 * clydeIncrement_x + clydeBase_x, 2 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                ],
                takeHit: [
                    0 * clydeIncrement_x + clydeBase_x, 3 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    1 * clydeIncrement_x + clydeBase_x, 3 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    2 * clydeIncrement_x + clydeBase_x, 3 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    3 * clydeIncrement_x + clydeBase_x, 3 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    4 * clydeIncrement_x + clydeBase_x, 3 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                ],
                die: [
                    0 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    1 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    2 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    3 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    4 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    5 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                    6 * clydeIncrement_x + clydeBase_x, 4 * clydeIncrement_y + clydeBase_y, clydeWidth, clydeHeight,
                ],

            },
            image_import: Clyde_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        }
    },
    Ebenezer: {
        name: 'Ebenezer',
        sprite: {
            scale: .3,
            spriteHeight: ebenezerHeight,
            spriteWidth: ebenezerWidth,
            labelOffset: -8,
            xBoundRightOffset: 12,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            selectionOffset: 20,
            animationList: ['idle', 'run', 'leap', 'jump', 'fall', 'attack1', 'attack2', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 0 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 0 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 0 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 0 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    4 * ebenezerIncrement_x + ebenezerBase_x, 0 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    5 * ebenezerIncrement_x + ebenezerBase_x, 0 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                run: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    4 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    5 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    6 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    7 * ebenezerIncrement_x + ebenezerBase_x, 1 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                leap: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    0 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    0 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    0 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                jump: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                fall: [
                    2 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 2 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                attack1: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    4 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    5 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    6 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    7 * ebenezerIncrement_x + ebenezerBase_x, 3 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                attack2: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    4 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    5 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    6 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    7 * ebenezerIncrement_x + ebenezerBase_x, 4 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                takeHit: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 5 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 5 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 5 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 5 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],
                die: [
                    0 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    1 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    2 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    3 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    4 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    5 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    5 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                    6 * ebenezerIncrement_x + ebenezerBase_x, 6 * ebenezerIncrement_y + ebenezerBase_y, ebenezerWidth, ebenezerHeight,
                ],

            },
            image_import: Ebenezer_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        }
    },
    Glonch: {
        name: 'Glonch',
        sprite: {
            scale: .6,
            spriteHeight: glonchHeight,
            spriteWidth: glonchWidth,
            labelOffset: 20,
            xBoundRightOffset: -5,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionOffset: 0,
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            animationList: ['idle', 'run', 'attack1', 'attack2', 'attack3', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    3 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    4 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    5 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    6 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    7 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    8 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    9 * glonchIncrement_x + glonchBase_x, 0 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],
                run: [
                    0 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    3 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    4 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    5 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    6 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    7 * glonchIncrement_x + glonchBase_x, 1 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],
                attack1: [
                    0 * glonchIncrement_x + glonchBase_x, 2 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 2 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 2 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    3 * glonchIncrement_x + glonchBase_x, 2 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    4 * glonchIncrement_x + glonchBase_x, 2 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    5 * glonchIncrement_x + glonchBase_x, 2 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],
                attack2: [
                    0 * glonchIncrement_x + glonchBase_x, 3 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 3 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 3 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    3 * glonchIncrement_x + glonchBase_x, 3 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    4 * glonchIncrement_x + glonchBase_x, 3 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    5 * glonchIncrement_x + glonchBase_x, 3 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],
                attack3: [
                    0 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    3 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    4 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    5 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    6 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    7 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    8 * glonchIncrement_x + glonchBase_x, 4 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],
                takeHit: [
                    0 * glonchIncrement_x + glonchBase_x, 5 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 5 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 5 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],
                die: [
                    0 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    1 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    2 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    3 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    4 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    5 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    6 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    7 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    8 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                    9 * glonchIncrement_x + glonchBase_x, 6 * glonchIncrement_y + glonchBase_y, glonchWidth, glonchHeight,
                ],

            },
            image_import: Glonch_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        }
    },
    KroyWen: {
        name: 'Kroy Wen',
        sprite: {
            scale: .4,
            spriteHeight: KroyWenHeight,
            spriteWidth: KroyWenWidth,
            labelOffset: 0,
            xBoundRightOffset: 5,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            selectionOffset: 10,
            animationList: ['idle', 'run', 'sprint', 'attack1', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    1 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    2 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    3 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    4 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    5 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    6 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    7 * KroyWenIncrement_x + KroyWenBase_x, 0 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                ],
                run: [
                    0 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    1 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    2 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    3 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    4 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    5 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    6 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    7 * KroyWenIncrement_x + KroyWenBase_x, 1 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                ],
                sprint: [
                    0 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    1 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    2 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    3 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    4 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    5 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    6 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    7 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                ],
                attack1: [
                    0 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    1 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    2 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    3 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    4 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    5 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    6 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    7 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    8 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    9 * KroyWenIncrement_x + KroyWenBase_x, 3 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                ],
                takeHit: [
                    0 * KroyWenIncrement_x + KroyWenBase_x, 4 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    1 * KroyWenIncrement_x + KroyWenBase_x, 4 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    2 * KroyWenIncrement_x + KroyWenBase_x, 4 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    3 * KroyWenIncrement_x + KroyWenBase_x, 4 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                ],
                die: [
                    0 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    1 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    2 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    3 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    4 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    5 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,
                    6 * KroyWenIncrement_x + KroyWenBase_x, 2 * KroyWenIncrement_y + KroyWenBase_y, KroyWenWidth, KroyWenHeight,        
                ],
    
            },
            image_import: KroyWen_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        }
    },
    SryKhan: {
        name: 'SryKhan',
        sprite: {
            scale: .4,
            spriteHeight: SryKhanHeight,
            spriteWidth: SryKhanWidth,
            labelOffset: 0,
            xBoundRightOffset: 4,
            animation: 'idle',
            prevAnimation: 'idle',
            selectionAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            selectionOffset: 15,
            animationList: ['idle', 'run', 'attack1', 'attack2', 'attack3', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    4 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    5 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    6 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    7 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    8 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    9 * SryKhanIncrement_x + SryKhanBase_x, 0 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    
                ],
                run: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    4 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    5 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    6 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    7 * SryKhanIncrement_x + SryKhanBase_x, 1 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                ],
                attack1: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    4 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    5 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    6 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    7 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    8 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    9 * SryKhanIncrement_x + SryKhanBase_x, 2 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                ],
                attack2: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    4 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    5 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    6 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    7 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    8 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    9 * SryKhanIncrement_x + SryKhanBase_x, 3 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                ],
                attack3: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    4 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    5 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    6 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    7 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    8 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    9 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    10 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    11 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    12 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    13 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    14 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    15 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    16 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    17 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    18 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    19 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    20 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    21 * SryKhanIncrement_x + SryKhanBase_x, 4 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                ],
                takeHit: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 5 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 5 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 5 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 5 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                ],
                die: [
                    0 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    1 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    2 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    3 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    4 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    5 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    6 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    7 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    8 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    9 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    10 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    11 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    12 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    13 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                    14 * SryKhanIncrement_x + SryKhanBase_x, 6 * SryKhanIncrement_y + SryKhanBase_y, SryKhanWidth, SryKhanHeight,
                ],
    
            },
            image_import: SryKhan_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        },
    },
    MadamePeregrin: {
        name: 'Madame Peregrin',
        sprite: {
            scale: .4,
            spriteHeight: MadamePeregrinHeight,
            spriteWidth: MadamePeregrinWidth,
            labelOffset: -15,
            xBoundRightOffset: 0,
            animation: 'idle',
            prevAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            selectionAnimation: 'idle',
            selectionOffset: 15,
            animationList: ['idle', 'run', 'attack1', 'attack2', 'attack3', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    3 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    4 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    5 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    6 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    7 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    8 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    9 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 0 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
                run: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    3 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    4 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    5 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    6 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    7 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 1 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
                attack1: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    3 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    4 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    5 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    6 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    7 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    8 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    9 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 2 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
                attack2: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    3 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    4 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    5 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    6 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    7 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    8 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 3 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
                attack3: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    3 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    4 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    5 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    6 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 4 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
                takeHit: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 5 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 5 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 5 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
                die: [
                    0 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    1 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    2 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    3 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    4 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    5 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                    6 * MadamePeregrinIncrement_x + MadamePeregrinBase_x, 6 * MadamePeregrinIncrement_y + MadamePeregrinBase_y, MadamePeregrinWidth, MadamePeregrinHeight,
                ],
    
            },
            image_import: MadamePeregrin_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        },
    },
    Eugenides: {
        name: 'Eugenides',
        sprite: {
            scale: .5,
            spriteHeight: EugenidesHeight,
            spriteWidth: EugenidesWidth,
            labelOffset: 0,
            xBoundRightOffset: 0,
            animation: 'idle',
            prevAnimation: 'idle',
            prevSelectionAnimation: 'idle',
            selectionAnimation: 'idle',
            selectionOffset: 4,
            animationList: ['idle', 'run', 'jump', 'fall', 'attack1', 'attack2', 'attack3', 'takeHit', 'die'],
            spriteLocation: {
                x: starting_location.x,
                y: starting_location.y,
                z: 0
            },
            animations: {
                idle: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 0 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 0 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 0 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 0 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    
                ],
                run: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    4 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    5 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    6 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    7 * EugenidesIncrement_x + EugenidesBase_x, 1 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                jump: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 2 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 2 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                fall: [
                    2 * EugenidesIncrement_x + EugenidesBase_x, 2 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 2 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                attack1: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 3 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 3 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 3 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 3 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                attack2: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 4 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 4 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 4 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 4 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                attack3: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 5 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 5 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 5 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 5 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                takeHit: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 6 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 6 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 6 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 6 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
                die: [
                    0 * EugenidesIncrement_x + EugenidesBase_x, 7 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    1 * EugenidesIncrement_x + EugenidesBase_x, 7 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    2 * EugenidesIncrement_x + EugenidesBase_x, 7 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 7 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                    3 * EugenidesIncrement_x + EugenidesBase_x, 7 * EugenidesIncrement_y + EugenidesBase_y, EugenidesWidth, EugenidesHeight,
                ],
    
            },
            image_import: Eugenides_Image_Import,
            toggledStates: {
                mouseover: false,
                isDragging: false,
            }
        },
    }

}