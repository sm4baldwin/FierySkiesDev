import React from 'react'
import './GreetingList.css'


export default function GreetingList(props) {
    return (
        <div className="container">
            <div className='greeting-list-title'><em>Emily, hope you are doing well!</em></div>
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