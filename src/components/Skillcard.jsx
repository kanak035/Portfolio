import React from 'react';

const SkillsCard = ({ icon: Icon, title, comment }) => {
  return (
    <div className='bg-slate-900 rounded border border-blue-900 p-5'>
      <div className='flex items-center justify-between mb-5'>
        <p className='text-base'>{title}</p>
        <Icon className="text-primary text-3xl"/>
      </div>
      <p>{comment}</p>
    </div>
  );
}

export default SkillsCard;
