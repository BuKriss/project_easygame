import React from 'react';
import Header from '../../components/header/Header';
import HeaderImage from '../../images/games-bg6.png';
import Footer from '../../components/footer/Footer';
import {trainers} from '../../data';
import Trainer from './Trainer';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

import './trainers.css';

const Trainers = () => {
  return (
    <>
    <Header title='Choose your Trainer' image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus ea libero error molestiae dolorem, repudiandae rem reprehenderit, fuga dolores ratione.
    </Header>
    <section className='trainers'>
      <div className='container trainers__container'>
        {
          trainers.map(({id, image, name, job, socials}) => {  
            return <Trainer 
            key={id} 
            image={image} 
            name={name}
            job={job} 
            socials={[
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedin/>, link: socials[3]}]
            }/>
          })
        }
        </div> 
    </section>
    <Footer/>
    </>
  )
}

export default Trainers;