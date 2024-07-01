import React, { useEffect } from 'react';
import PROFILE_PIC from '../assets/kanak6.jpg';
import { ABOUT_ME_DATA } from '../utils/data.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className='max-w-screen-xl px-6 mx-auto py-10 md:py-24' id="about" data-aos="fade-up">
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14' data-aos="fade-right">About me</h5>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <img className='w-90 h-90 object-cover rounded-lg mb-4 md:mb-0' src={PROFILE_PIC} alt="profile pic" data-aos="zoom-in" />
        <div className='col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6' data-aos="fade-left">
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT_ME_DATA.introduction}  {ABOUT_ME_DATA.background}{" "}
            {ABOUT_ME_DATA.interests}
          </p>
          <br />
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.carrerGoals}
          </p>
        </div>
      </div>
      <div className='' data-aos="fade-up">
        {/* Additional content if needed */}
      </div>
    </section>
  );
};

export default Aboutme;
