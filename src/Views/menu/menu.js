import React, {useState} from 'react';
import './menu.css';
import Button from '../../Components/Button/Button';



export default function Menu(props) {
    const [greeting, setGreeting] = useState("Hey Emily!");
    
    //let buttonList = [];
    //let text = ["test 1", "test 2", "NEW TEST WOOOOOOOO"];
    //text.forEach( item => buttonList.push(<Button shadow={buttonShadow} 
        //text={item} onClick={setButtonShadow}/>));
    
    return (
        <div className="menu">
            <Button text={greeting} setGreeting={setGreeting} />
        </div>
    )
};