import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Stats from './Stats';
import Faq from './FAQ'
import Subscribe from './SubScribe';
import Footer from './Footer';
const Main = () => {
  
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Stats />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Main;
