import React, { useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import Header from '../../components/header/Header';
import HeaderImage from '../../images/games-bg3.jpg';
import Footer from '../../components/footer/Footer';

import './signIn.css';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/signin')
    };
    
    const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password);
            
    };

  return (
    <>
    <Header title='Create an account' image={HeaderImage}>Sign Up</Header>
    <section className='sign'>
      <div className='container sign__container'>
          <label htmlFor="email_input">E-mail</label>
          <input 
            id="email_input" 
            type="email" 
            placeholder="enter your e-mail"
            onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password_input">Password</label>
          <input 
            id="password_input" 
            type="password"
            placeholder="enter your password" 
            onChange={(e) => setPassword(e.target.value)} />
          <button className='btn btn-lg' type="submit" onClick={handleRegister}>Register</button>
          <div className='redirect'>
            <h3>Already have an account?</h3>
            <button className='btn btn-lg' onClick={handleRedirect}>Go sign in</button>
          </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default SignUp;