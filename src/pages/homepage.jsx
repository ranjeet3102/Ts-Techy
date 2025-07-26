import React from 'react';
import HeroSection from '../Components/home/herosection/heroSection.jsx';
import Service from '../Components/home/Service/service.jsx';
import Choose from '../Components/home/choose/chooselaptop.jsx';
import Contact from '../Components/home/contact/contact.jsx';
import Footer from '../Components/home/footer/footer.jsx';
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <Choose />
      <div className=" min-h-screen flex items-center justify-center p-4 pt-20">
      <Contact />
    </div><div className="pt-32">
    <Footer/>

    </div>
    </div>
  );
};

export default HomePage;

  