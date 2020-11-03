import React from 'react'
import './GreetingList.css'


export default function GreetingList(props) {
    console.log(props.parentGreetings)
    return (
        <div className="container">
            {props.parentGreetings.map((item, id) => {
                return (
                    <div className='greeting' key={id}>
                        {item.newGreeting}
                    </div>
                )
            })}
        </div>
    )
}