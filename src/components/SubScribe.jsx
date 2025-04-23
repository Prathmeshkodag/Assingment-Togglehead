import React from 'react';
import '../assets/css/Subscribe.css'
import subscribe from '../assets/images/Subscribeimage.png'
const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>Subscribe</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="subscribe-input"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe Now <span className="arrow">▶</span>
          </button>
        </form>
      </div>
      <div className="subscribe-image">
        <img src={subscribe} alt="Subscribe illustration" />
      </div>
    </div>
  );
};

export default Subscribe;
