import React from 'react';
import founderImage from '../../../assets/selven.webp';
import './founder.css'; 

const Founder = () => {
  return (
    <div className="founder-container">
      <div className="founder-image">
        <img src={founderImage} alt="Selvendran S, Founder & Product Designer" />
      </div>
      <div className="founder-info">
        <h2>Selvendran S</h2>
        <p className="founder-title pt-3">Founder & Product Designer</p>
        <p>
          Hi, I’m Selvendran S.! I’m passionate about turning ideas into real,
          usable tech—whether it’s building websites or crafting apps.
        </p>
        <p>
          My goal is simple: to make your digital dreams come true, all while
          keeping things down-to-earth, fun.
        </p>
        <p className="founder-cta">Let’s work together to create something great!</p>
      </div>
    </div>
  );
};

export default Founder;