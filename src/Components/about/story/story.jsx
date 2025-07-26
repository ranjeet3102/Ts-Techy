import React from 'react';
import './story.css';
import { ShieldCheck, Target, TrendingUp } from 'lucide-react'; 
const Story = () => {
  return (
    <div className="story-page">
      

      <div className="story-principles">
        <div className="principle-card">
          <Target className="principle-icon" size={40} />
          <h3>Tailored Solutions</h3>
          <p>We tailor IT solutions to meet the unique needs of each client.</p>
        </div>
        <div className="principle-card">
          <ShieldCheck className="principle-icon" size={40} />
          <h3>Data Protection</h3>
          <p>We protect data to build trust and ensure security in the digital era.</p>
        </div>
        <div className="principle-card">
          <TrendingUp className="principle-icon" size={40} />
          <h3>Evolving Technology</h3>
          <p>We embrace evolving tech to keep you and your business competitive.</p>
        </div>
      </div>

      <div className="story-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple yet profound: to empower businesses with the
          technology they need to thrive in today's digital age. We believe
          that technology should be a catalyst for growth, efficiency, and
          innovation.
        </p>
      </div>

      <div className="story-section">
        <h2>Our Vision</h2>
        <p>
          We envision a future where technology is a force for positive
          transformation in every aspect of business and society. We are
          committed to leading this evolution by being at the forefront of
          innovation.
        </p>
      </div>
    </div>
  );
};

export default Story;