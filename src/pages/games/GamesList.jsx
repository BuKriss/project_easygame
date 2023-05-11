import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeaderImage from '../../images/games-bg4.jpg'
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import GameItem from './GameItem';
import {games} from '../../data';

import './games.css';

const GamesList = () => {

  const location = useLocation();

  
  const [gamePlace, setGamePlace] = useState(location.state.gamePlace);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options); 
  
  return (
    <>
    <Header title="Find your game" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt amet vero quibusdam illum. Perspiciatis odit earum placeat ut quod?
    </Header>
    <section className='gamesList'>
      <div className='container games__container'>
        <div className='list__search'>
          <h2 className='list-title'>Search</h2>
          <div className="list-item">
            <label>Game place</label>
            <input placeholder={gamePlace} type="text"
            onChange={e => setGamePlace(e.target.value)}/>
          </div>
          <div className="list-item">
            <label>Game date</label>
            <span>{`${date}`}</span>  
            <DatePicker onChange={setDate} value={date}/>
          </div>
          <div className="list-item">
            <label>Options</label>
            <div className='list__option-item'>
              <span className='list__option-text'>Man</span>
              <input 
              type="number" 
              min={0}
              className='list__option-input'
              placeholder={options.man}
              />
            </div>
            <div className='list__option-item'>
              <span className='list__option-text'>Woman</span>
              <input 
              type="number" 
              min={0}
              className='list__option-input'
              placeholder={options.woman} />
            </div> 
          </div> 
          <button className='btn btn lg'>Search</button>
        </div>
        <div className='list__result'>
        {
          games.map(({id, image, name, place, description}) => {  
            return <GameItem 
            key={id} 
            image={image} 
            name={name}
            place={place} 
            description={description}/>
          })
        }
        </div>
      </div>
    </section>
    
    <Footer/>
    </>
  )
}

export default GamesList;