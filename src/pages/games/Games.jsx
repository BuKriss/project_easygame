import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeaderImage from '../../images/players-bg1.jpg';
import {GiVolleyballBall} from 'react-icons/gi';
import SectionHead from '../../components/SectionHead/SectionHead';
import {games} from '../../data';
import GameItem from './GameItem';

import './games.css';

const Games = () => {
  return (
    <>
    <Header title="Wanna play?" image={HeaderImage}>
      Choose a place on the map and contact the organiser
    </Header>
    <section className='gamesMap'>
      <div className='container gamesMap__container'>
        <SectionHead icon={<GiVolleyballBall/>} title="Find your place to play" className="tutorial__head"/>
        <div className='volleyball_map'>
          <iframe title='volleyball_map' src="https://www.google.com/maps/d/embed?mid=1dtXKWcHg9b0ZgA_rXCf7zFKaPgY2uVAp&ehbc=2E312F" 
          width="840" height="680"></iframe>
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

export default Games;