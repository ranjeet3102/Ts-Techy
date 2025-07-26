import React, { useState, useEffect } from 'react';
import Laptop from './contactlaptop.jsx';
import Mobile from './contactmobile.jsx';

export default function Contact() {
  const [isLaptopView, setIsLaptopView] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLaptopView(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLaptopView ? <Laptop /> : <Mobile />;
}
