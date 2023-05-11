import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import {GrMail} from 'react-icons/gr';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <h4>#FindYourGameToPlay</h4>
                <div className='footer__socials'>
                    <a href="mailto:easygame@gmail.com" target='_blank' rel='noreferrer noopener'><GrMail/>
                    </a>
                    <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebook/>
                    </a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/>
                    </a>
                </div>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 BKN &copy; All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer;