import React from 'react';
import '../assets/css/About.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FaCircleArrowRight } from "react-icons/fa6";
const dates = [
  { icon: <FaCalendarAlt />, title: '02th October 2014', subtitle: 'Level 1 exam' },
  { icon: <FaCalendarAlt />, title: 'Nov-Dec 2016', subtitle: 'Level 2', desc: 'Lorem Ipsum\nLorem Ipsum' },
  { icon: <FaClock />, title: 'Ongoing this year', subtitle: 'Level 3 (Grad)' },
];

const cards = Array(6).fill({
  title: 'Lorem ipsum',
  desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  icon: <FaCircleArrowRight />
});

const About = () => {
  return (
    <section className="exams-section">
      <div className="exams-header">
        <div className="exams-left">
          <h2>Upcoming<br />Examinations</h2>
          <p>Enquire about the examination & register for the exams</p>
        </div>
        <div className='divederborder'>
          
        </div>
        <div className="exams-dates">
          {dates.map((date, idx) => (
            <div className="date-item" key={idx}>
              <div className="icon">{date.icon}</div>
              <h4>{date.title}</h4>
              <p>{date.subtitle}</p>
              {date.desc && <p>{date.desc}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="exams-cards-scroll">
        <div className="cards-wrapper">
          {cards.map((card, idx) => (
            <div className="exam-card" key={idx}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a href="#" className="know-more">
                Know More  {card.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
