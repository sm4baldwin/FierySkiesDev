import React from 'react';
import './mat.css';
import CardSpace from '../../Components/CardSpace/CardSpace';

export default function Mat(props) {
    return (
        <div className="mat">
            <CardSpace card="This is the first card" cardType="This is the first card's type" />
            <CardSpace card="This is the first card" cardType="This is the first card's type" />
            <CardSpace card="This is the first card" cardType="This is the first card's type" />
            <CardSpace card="This is the first card" cardType="This is the first card's type" />
        </div>
    )
};