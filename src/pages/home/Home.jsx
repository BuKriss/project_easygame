import React from 'react';
import FAQs from '../../components/FAQs/FAQs';
import Footer from '../../components/footer/Footer';
import SearchBar from '../../components/searchBar/SearchBar';
import MainHeader from '../../components/header/MainHeader';
import Testimonials from '../../components/testimonials/Testimonials';

import './home.css';

const Home = () => {
  return (
    <>
    <MainHeader/>
    <SearchBar/>
    <FAQs/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home;