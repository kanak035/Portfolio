import React, { useEffect } from 'react';
import PROFILE_PIC from '../assets/kanak5.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const skills = [
    "HTML", "CSS", "SCSS", "JavaScript", "React.js", "Next.js", "Tailwind", 
    "Bootstrap", "Node.js", "Express.js", "MongoDB", "REST API", "Postman", 
    "jQuery", "SQL","AOS","vite"
  ];

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className='max-w-screen-xl flex flex-col gap-24 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto' id="hero" data-aos="fade-up">
      <div className='flex-1 text-center md:text-left z-[1]' data-aos="fade-right">
        <span className='text-xs md:text-sm text-blue-200 font-thin'> Full Stack Developer</span>
        <h2 className='text-3xl mt-3 md:text-5xl md:mt-5'>Kanak Dhiman👋</h2>
        <p className='w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8'>Passionate React JS developer</p>
        <button className='primary-btn' onClick={() => handleScroll('contact')}>Contact Me</button>
      </div>
      <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]'>
        <div className='w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6' data-aos="zoom-in">
          <div className='flex items-center justify-center'>
            <img className="hero-img" src={PROFILE_PIC} alt="Profile Pic" />
          </div>
          <div className='bg-cardbg rounded-md text-center mt-3 p-4'>
            <h5 className='text-sm md:text-base text-white'>Kanak Dhiman</h5>
            <p className='text-slate-500 text-xs md:font-medium mt-1'>Full Stack Developer</p>
            <div className='flex items-center justify-center gap-2 text-slate-500 text-xs mt-1'>
              <HiOutlineLocationMarker />
              <p className='font-medium'>Gwalior, M.P.</p>
            </div>
          </div>
          <InfoTile
            icon={<FiMail size={20} className='test-sky-400' />}
            text="kanakdhiman@gmail.com"
            data-aos="fade-left" />
          <div className='flex items-center gap-2 flex-wrap my-3'>
            {skills.map((item) => (
              <div key={item} className='skill-item hover:bg-black' data-aos="fade-up">
                {item}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <a href="https://github.com/kanak035" target="_blank" rel="noopener noreferrer" className='bg-blue-800/30 p-2 rounded' data-aos="fade-up">
              <FaGithub className='text-lg md:text-xl' />
            </a>
            <a href="https://www.linkedin.com/in/kanak3" target="_blank" rel="noopener noreferrer" className='bg-blue-800/30 p-2 rounded' data-aos="fade-up">
              <FaLinkedin className='text-lg md:text-xl'/>
            </a>
          </div>
        </div>
      </div>
      <div className='ui-circle absolute top-6 md:top-10 -left-10 md:left-0' data-aos="fade-up"></div>
    </section>
  );
}

const InfoTile = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-4 bg-cardbg p-4 mt-3 rounded-md' data-aos="fade-up">
      {icon}
      <p className='text-xs md:text-sm font-normal'>{text}</p>
    </div>
  );
}

export default Hero;
