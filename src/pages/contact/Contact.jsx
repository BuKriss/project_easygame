import React from 'react';
import Header from '../../components/header/Header';
import HeaderImage from '../../images/contact-bg2.png';
import Footer from '../../components/footer/Footer';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

import './contact.css';

const Contact = () => {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
    Contact Us
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>easygame@gmail.com</h5>
            <a href='mailto:easygame@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Easygame</h5>
            <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>easygameTw</h5>
            <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Easy_game</h5>
            <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'>Send a message</a>
          </article>
        </div>
        <form action="">
          <h2>Write a message</h2>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your e-mail' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn lg'>Send message</button>
        </form>
        
        </div> 
    </section>
    <Footer/>
    </>
  )
}

export default Contact;