import React from 'react';
import Card from '../../components/card/Card';

import './games.css';


const GameItem = ({image, name, place, description}) => {
  return (
    <Card classname='gameItem'>
        <div className='game__img'>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{place}</p>
        <p>{description}</p>    
    </Card>
  )
}

export default GameItem;