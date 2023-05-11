import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/main__header4.jpg'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#FindYourPlaceToPlay</h4>
          <h1>Join The Legends Of Sports</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam, tempora exercitationem ex aut veritatis nihil magni dignissimos repellat, commodi autem nulla mollitia ratione repudiandae quo sit quibusdam officia eius?</p>
          <Link to='/games' className='btn lg'>Find the Game</Link>
        </div>
        <div className='main__header-right'>
          <img className='main__header-img' src={Image} alt="Main Header" />
        </div>
      </div>
    </header>
  )
}

export default MainHeader;