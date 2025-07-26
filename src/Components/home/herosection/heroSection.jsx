import React from 'react';
import './heroSection.css'; 
import laptopImage from '../../../assets/lap.webp';
import ShinyText from '../../../design/shinytext.jsx'; 
const HeroSection = () => {
  return (
    <div className="seo-hero-container">
      {/* Left Column: Text Content */}
      <div className="hero-content">
        <h1 className="text-5xl font-extrabold leading-tight text-white">
  <ShinyText
    text="Grow Your Business with Smart SEO"
    speed={3}
    className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
  />
</h1>
        <h2>At TS Techy, we help your website rank higher and convert</h2>
<div class="group relative w-fit transition-transform duration-300 active:scale-95 mt-8">

  <a href="https://tstechy.com/inquire-form/" target="_blank" rel="noopener noreferrer" class="relative z-10 block rounded-full bg-[#0EA5E9] p-1 shadow-lg shadow-cyan-400/40 transition duration-300 group-hover:scale-105 group-active:scale-95">
    <span class="block rounded-full bg-white px-8 py-3 text-lg font-bold tracking-wide text-[#0F172A] transition duration-300 group-hover:bg-white/90">
      Get Free Consultation
    </span>
  </a>

  <span class="pointer-events-none absolute -inset-4 z-0 transform rounded-full bg-cyan-400 opacity-0 blur-2xl transition-opacity duration-500 group-hover:animate-glow-pulse group-hover:opacity-75 group-active:opacity-50"></span>

</div>
      </div>

      {/* Right Column: Image */}
      <div className="hero-image-container">
       <img
           src={laptopImage}
           alt="Laptop showcasing a landing page builder interface"
           className="laptop-image"
         />
      </div>
    </div>
  );
};

export default HeroSection;