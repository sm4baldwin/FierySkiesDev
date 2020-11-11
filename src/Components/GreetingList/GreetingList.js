import React from 'react'
import './GreetingList.css'
import { UpdateGreeting, DeleteGreeting, AddResponse } from '../GreetingButtons/GreetingButtons'

export default function GreetingList(props) {

    return (
        <div className="container column-flex">
            <div className='greeting-list-title'><em>Here's a list of encouragements!</em></div>
            {props.parentGreetings.map((item, id) => {
                return (
                    <div className='greeting' key={id}>
                        <div className='column-flex greeting-text'>
                            <div>
                                <strong>[Greeting] </strong>{item.newGreeting}
                            </div>
                            {item.response && <div className='greeting-text'>
                                <strong>[Response]</strong> {item.response}
                            </div>}
                        </div>
                        <div className='greeting-buttons'>
                            {!item.read && <UpdateGreeting 
                                firebase={props.firebase} 
                                itemID={item.id} />}
                            {item.read && <AddResponse 
                                firebase={props.firebase} 
                                itemID={item.id} 
                                response={item.response}/>}
                            {item.read && <DeleteGreeting 
                                firebase={props.firebase} 
                                itemID={item.id} /> }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}