import React from 'react';
import './CardSpace.css';

export default function CardSpace(props) {
    return (
        <div className="cardSpace">
            <div className="card">
                {props.card}
            </div>
            <div className="cardDescriptor">
                {props.cardType}
            </div>
        </div>
    )
}