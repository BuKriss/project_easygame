import React from 'react';
import Header from '../../components/header/Header';
import HeaderImage from '../../images/games-bg5.jpg';
import Footer from '../../components/footer/Footer';
import {MdOutlineVideoLibrary} from 'react-icons/md';
import SectionHead from '../../components/SectionHead/SectionHead';

import './tutorial.css';

const Tutorial = () => {
  return (
    <>
    <Header title="Need advice?" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt amet vero quibusdam illum. Perspiciatis odit earum placeat ut quod?
    </Header>
    <section className='tutorial'>
      <div className='container tutorial__container'>
        <SectionHead icon={<MdOutlineVideoLibrary/>} title="Watch the videos" className="tutorial__head"/>
        <div className='tutorial-videos'>
          <div className='tutorial-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gOgfoEGUDCA" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 className='tutorial-video__title'>Passing FUNDAMENTALS - How to PASS</h3>
          </div>
          <div className='tutorial-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MGOTzHRjPk0" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 className='tutorial-video__title'>Volleyball Defense Tutorial</h3>
          </div>
          <div className='tutorial-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wW6gayjUp5U" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 className='tutorial-video__title'>READING Hitters</h3>
          </div>
          <div className='tutorial-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FNj_YkYFYVs" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 className='tutorial-video__title'>HOW TO MAKE GOOD SETTING DECISIONS</h3>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Tutorial;