// import { useState } from 'react'
// import Header from './Components/header/header.jsx'
// import './App.css'
// import HeroSection from './Components/herosection/herosection.jsx'
// import Service from './Components/Service/service.jsx'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <Header/>
//    <HeroSection/>
//    <Service/>

//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import your components
import Header from './Components/header/header.jsx' // Make sure the path is correct
import HomePage from './pages/homepage.jsx';
import AboutPage from './pages/aboutpage.jsx';
import ServicesPage from './pages/servicespage.jsx';
import ContactPage from './pages/contactpage.jsx';

function App() {
  return (
   <>
      <Header />
     <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
<Route path="/contact" element={<ContactPage />} />
        </Routes>
     </main>  
          </>
      
     
    
  );
}

export default App;