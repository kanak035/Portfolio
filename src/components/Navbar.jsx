import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from 'react-icons/ri';
import { CgMenuMotion } from 'react-icons/cg';
import MobileNavbar from './MobileNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <div className='w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10' data-aos="fade-down">
        <nav className='max-w-screen-xl bg-navbg rounded-xl shadow-sky-600/10 mx-auto py-3 px-6'>
          <ul className='flex items-center gap-14'>
            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-items">
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth spy offset={-80} className="menu-items">
                Skills
              </Link>
            </li>
            <li>
              <Link to="about" smooth spy offset={-80} className="menu-items">
                About Me
              </Link>
            </li>
            <li>
              <Link to="contact" smooth spy offset={-80} className="menu-items">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='p-3 fixed top-0 right-0 z-50' data-aos="fade-left">
        <button onClick={toggleMenuOpen} className='w-11 h-11 text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto'>
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
