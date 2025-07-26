
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import techyLogo from "../../assets/TS-Techy4.png.webp";  


// const Logo = () => (
//   <Link to="/" className="flex items-center flex-shrink-0">
//      <img src={techyLogo} alt="Techy Logo" className="h-20 w-auto" />
    
//   </Link>
// );


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   // Navigation links configuration
//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//   ];

 
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const closeMenu = () => setIsMenuOpen(false);

//   // Effect to prevent scrolling when the mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     // Cleanup function to reset the style when the component unmounts
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isMenuOpen]);


//   return (
//     <>
//       {/* Main Header Bar */}
//       <header className="bg-black text-white shadow-md sticky top-0 z-50 transition-all duration-300">
//         <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-24 ">
            
//             {/* Logo - Pushed to the left */}
//             <Logo />

//             {/* Desktop Navigation & CTA - Grouped and pushed to the right */}
//             <div className="hidden md:flex items-center space-x-20">
//               <nav className="flex items-center space-x-20">
//                 {navLinks.map((link) => {
//                   const isActive = location.pathname === link.href;
//                   return (
//                     <Link
//                       key={link.name}
//                       to={link.href}
//                       className="relative text-2xl font-semibold text-gray-300 hover:text-white transition-colors duration-300 group"
//                     >
//                       {link.name}
//                       {/* Underline animation effect */}
//                       <span
//                         className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
//                           isActive ? 'scale-x-100' : 'scale-x-0'
//                         }`}
//                       ></span>
//                     </Link>
//                   );
//                 })}
//               </nav>
//               {/* Contact Us Button */}
//               <Link
//                 to="/contact"
//                 className="bg-yellow-400 text-black text-2xl font-bold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//                 aria-expanded={isMenuOpen}
//                 className="text-gray-300 hover:text-white transition-colors"
//               >
//                 <Menu className="h-8 w-8" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation Menu - Slides in from the right */}
//       <div
//         className={`fixed inset-y-10 right-4 h-1/2 w-1/2 bg-black z-50 transform transition-transform duration-300 ease-in-out rounded-2xl ${
//           isMenuOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'
//         } md:hidden`}
//       >
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             aria-label="Close menu"
//             className="text-gray-300 hover:text-white"
//           >
//             <X className="h-8 w-8" />
//           </button>
//         </div>
//         <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-10">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               onClick={closeMenu}
//               className={`text-2xl font-semibold ${location.pathname === link.href ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             to="/contact"
//             onClick={closeMenu}
//             className={`text-2xl font-semibold text-white hover:text-yellow-400 transition-colors`}
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
      
//       {/* Overlay for when mobile menu is open */}
//       {isMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
//           onClick={closeMenu}
//         ></div>
//       )}
      
//     </>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import techyLogo from "../../assets/TS-Techy4.png.webp"; 


// const Logo = () => (
//  <Link to="/" className="flex items-center flex-shrink-0">
//    <img src={techyLogo} alt="Techy Logo" className="h-12 w-auto" />
  
//  </Link>
// );


// const Header = () => {
//  const [isMenuOpen, setIsMenuOpen] = useState(false);
//  // ADDED: State to manage header visibility and last scroll position
//  const [isVisible, setIsVisible] = useState(true);
//  const [lastScrollY, setLastScrollY] = useState(0);
//  const location = useLocation();

//  // Navigation links configuration
//  const navLinks = [
//    { name: 'Home', href: '/' },
//    { name: 'About', href: '/about' },
//    { name: 'Services', href: '/services' },
//  ];


//  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//  const closeMenu = () => setIsMenuOpen(false);

//  // Effect to prevent scrolling when the mobile menu is open
//  useEffect(() => {
//    if (isMenuOpen) {
//      document.body.style.overflow = 'hidden';
//    } else {
//      document.body.style.overflow = 'auto';
//    }
//    // Cleanup function to reset the style when the component unmounts
//    return () => {
//      document.body.style.overflow = 'auto';
//    };
//  }, [isMenuOpen]);

//  // ADDED: Effect to handle header visibility on scroll
//  useEffect(() => {
//    const handleScroll = () => {
//      const currentScrollY = window.scrollY;

//      if (isMenuOpen) {
//        // Keep header visible when mobile menu is open
//        setIsVisible(true);
//        return;
//      }

//      // Hide header on scroll down, show on scroll up or if at the top
//      if (currentScrollY > lastScrollY && currentScrollY > 100) {
//        setIsVisible(false);
//      } else {
//        setIsVisible(true);
//      }

//      setLastScrollY(currentScrollY);
//    };

//    window.addEventListener('scroll', handleScroll, { passive: true });

//    return () => {
//      window.removeEventListener('scroll', handleScroll);
//    };
//  }, [lastScrollY, isMenuOpen]);


//  return (
//    <>
//      {/* Main Header Bar */}
//      {/* MODIFIED: Added dynamic classes for showing/hiding the header */}
//      <header
//        className={`bg-black text-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
//          isVisible ? 'transform-none' : '-translate-y-full'
//        }`}
//      >
//        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//          <div className="flex items-center justify-between h-16 ">
           
//            {/* Logo - Pushed to the left */}
//            <Logo />

//            {/* Desktop Navigation & CTA - Grouped and pushed to the right */}
//            <div className="hidden md:flex items-center space-x-10">
//              <nav className="flex items-center space-x-8">
//                {navLinks.map((link) => {
//                  const isActive = location.pathname === link.href;
//                  return (
//                    <Link
//                      key={link.name}
//                      to={link.href}
//                      className="relative text-1l font-semibold text-gray-300 hover:text-white transition-colors duration-300 group"
//                    >
//                      {link.name}
//                      {/* Underline animation effect */}
//                      <span
//                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ease-out ${
//                          isActive ? 'scale-x-100' : 'scale-x-0'
//                        }`}
//                      ></span>
//                    </Link>
//                  );
//                })}
//              </nav>
//              {/* Contact Us Button */}
//              <Link
//                to="/contact"
//                className="bg-yellow-400 text-black text-1l font-bold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
//              >
//                Contact Us
//              </Link>
//            </div>

//            {/* Mobile Menu Button */}
//            <div className="md:hidden">
//              <button
//                onClick={toggleMenu}
//                aria-label="Toggle menu"
//                aria-expanded={isMenuOpen}
//                className="text-gray-300 hover:text-white transition-colors"
//              >
//                <Menu className="h-8 w-8" />
//              </button>
//            </div>
//          </div>
//        </div>
//      </header>

//      {/* Mobile Navigation Menu - Slides in from the right */}
//      <div
//        className={`fixed inset-y-10 right-0 h-1/2 w-1/2  bg-black/30 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out rounded-2xl ${
//          isMenuOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'
//        } md:hidden`}
//      >
//        <div className="flex justify-end p-4">
//          <button
//            onClick={toggleMenu}
//            aria-label="Close menu"
//            className="text-gray-300 hover:text-white"
//          >
//            <X className="h-8 w-8" />
//          </button>
//        </div>
//        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-10">
//          {navLinks.map((link) => (
//            <Link
//              key={link.name}
//              to={link.href}
//              onClick={closeMenu}
//              className={`text-1l font-semibold ${location.pathname === link.href ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
//            >
//              {link.name}
//            </Link>
//          ))}
//          <Link
//            to="/contact"
//            onClick={closeMenu}
//            className={`text-1l font-semibold text-white hover:text-yellow-400 transition-colors`}
//          >
//            Contact Us
//          </Link>
//        </nav>
//      </div>
     
//      {/* Overlay for when mobile menu is open */}
//      {isMenuOpen && (
//        <div 
//          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
//          onClick={closeMenu}
//        ></div>
//      )}
     
//    </>
//  );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import techyLogo from "../../assets/TS-Techy4.png.webp";

const Logo = () => (
  <Link to="/" className="flex items-center flex-shrink-0">
    <img src={techyLogo} alt="Techy Logo" className="h-12 w-auto" />
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }
      setIsVisible(currentScrollY <= 50 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header
        className={`bg-black text-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="hidden md:flex items-center space-x-10">
              <nav className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="relative text-1l font-semibold text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-300 ease-out ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </nav>
              <Link
                to="/contact"
                className="bg-yellow-400 text-black text-1l font-bold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-10 right-0 w-1/2 h-1/2 bg-black/30 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out rounded-2xl md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMenu}
              className={`text-1l font-semibold ${
                location.pathname === link.href
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              } hover:text-yellow-400 transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact"
            onClick={closeMenu}
              className={`text-1l font-semibold transition-colors ${
                location.pathname === '/contact' ? 'text-yellow-400' : 'text-white'
                  } hover:text-yellow-400`}
          >
             Contact Us
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
