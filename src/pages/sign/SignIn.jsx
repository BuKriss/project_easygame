import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import HeaderImage from '../../images/games-bg8.jpg';
import Footer from '../../components/footer/Footer';
import useAuth from "../../hooks/useAuth";

import './signIn.css';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { isAuth } = useAuth();

    useEffect(() => {
      if (!isAuth) {
          return;
      }
      navigate("/");
    }, [isAuth]);

    console.log(isAuth)
    
    const handleRegister = (event) => {
      event.preventDefault();

      signInWithEmailAndPassword(auth, email, password);    
    };

  return (
    <>
    <Header title='Sign In' image={HeaderImage}></Header>
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
          <button className='btn btn-lg' type="submit" onClick={handleRegister}>Send</button>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default SignIn;