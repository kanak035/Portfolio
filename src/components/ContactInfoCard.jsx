import React from 'react';

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="contact-info-card" data-aos="fade-up">
      <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5">
        <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700">{icon}</div>
        <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
      </div>
    </div>
  );
}

export default ContactInfoCard;
