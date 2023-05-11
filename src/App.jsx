import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Games from './pages/games/Games';
import GamesList from './pages/games/GamesList';
import Tutorial from './pages/tutorial/Tutorial';
import Trainers from './pages/trainers/Trainers';
import Contact from './pages/contact/Contact';
import SignUp from './pages/sign/SignUp';
import SignIn from './pages/sign/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='games' element={<Games/>}/>
        <Route path='gamesList' element={<GamesList/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='tutorial' element={<Tutorial/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
