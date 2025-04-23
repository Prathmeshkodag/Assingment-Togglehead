import React from 'react';
import '../assets/css/Home.css';
import HomeImage from '../assets/images/homeimage.png'; 

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-left">
        <h1>Lorem ipsum</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptas quo quia impedit sequi, ea perferendis repellendus non maiores maxime. Facere fugit nesciunt dicta sapiente excepturi animi ipsa expedita esse illo tempora? Mollitia, earum dolore hic quaerat incidunt error aut saepe enim tempora ad optio iste libero. Laudantium, doloremque quia? Exercitationem, minima. At delectus quod nisi sit tempore ipsum temporibus dolore ut vero optio, porro excepturi doloremque nemo natus. Ad corrupti voluptatum assumenda inventore. Laborum dolore consectetur adipisci labore id voluptatum dolor nesciunt reiciendis neque architecto molestiae, cum quisquam consequuntur cumque facilis? Rerum similique nulla voluptatum eligendi, beatae reiciendis! Adipisci?
        </p>
        <button className="know-more-btn">Know More</button>
      </div>

      <div className="home-right">
        <img src={HomeImage} alt="Illustration" />
      </div>
    </section>
  );
};

export default Home;
