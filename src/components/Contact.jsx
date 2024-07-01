import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import ContactInfoCard from './ContactInfoCard'; // Assuming ContactInfoCard is in the same directory

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <section className='max-w-screen-xl mx-auto px-6 pb-20' id='contact'>
      <h5 className='text-primary text-2xl md:text4xl font-semibold text-center pb-8 md:pb-14'>
        Contact Me
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactInfoCard icon={<IoMdMail />} text="kanakdhiman@gmail.com" />
          <ContactInfoCard icon={<IoPhonePortraitOutline />} text="999-999-9999" />
          <ContactInfoCard icon={<MdOutlineWeb />} text="kanakdhiman@gmail.com" />
        </div>
        <div data-aos="fade-up">
          <h5>Contact Form</h5>
          <form className="flex flex-col">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              id=""
              className="input-box"
              autoComplete="off"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              id=""
              className="input-box"
              autoComplete="off"
            />
            <textarea name="message" placeholder="Message" id="" rows="3" className='input-box'></textarea>
            <button className="primary-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
