import React from 'react';
import '../assets/css/Home.css';
import HomeImage from '../assets/images/homeimage.png'; 

const Home = () => {
  return (
    <section className="home-section">
    <div className="home-left">
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd.
      </p>
      <button className="know-more-btn">Know More ►</button>
    </div>
  
    <div className="home-right">
      <img src={HomeImage} alt="Illustration" />
    </div>
  </section>
  
  );
};

export default Home;
