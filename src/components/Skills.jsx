import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillsCard from './Skillcard'; // Adjust the path as necessary
import { SKILLS } from '../utils/data'; // Adjust the path as necessary

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <div>
      <section className='max-w-screen-xl px-6 mx-auto pb-20' id='skills'>
        <div className='bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8'>
          <h5 className='text-xl font-medium mb-5'>Skills</h5>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {SKILLS.map((skill) => (
              <div key={skill.id} data-aos="fade-up">
                <SkillsCard
                  icon={skill.icon}
                  title={skill.title}
                  comment={skill.comment}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
