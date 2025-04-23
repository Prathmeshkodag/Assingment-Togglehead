import React from "react";
import '../assets/css/Stats.css';
const StatsSection = () => {
    const stats = [
        {
          heading: 'Lorem ipsum',
          number: '123+',
          subheading: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
        },
        {
          heading: 'Lorem ipsum',
          number: '12+',
          subheading: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
        },
        {
          heading: 'Lorem ipsum',
          number: '12+',
          subheading: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
        },
        {
          heading: 'Lorem ipsum',
          number: '123',
          subheading: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        }
      ];
    return (
      <section className="stats-section">
        <div className="stats-scroll">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <p className="top-heading">{item.heading}</p>
              <h2 className="big-number">{item.number}</h2>
              <h4 className="subheading">{item.subheading}</h4>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default StatsSection;