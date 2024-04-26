import React from 'react';

const Card = ({ icon, text, value, unit }) => {
  return (
    <div className='bg-black bg-opacity-50 text-white rounded-lg p-4'>
      <div>{icon}</div>
      <p className='text-gray-400 font-thin'>{text}</p>
      <h2>
        {Math.round(value)}
        <span>{unit}</span>
      </h2>
    </div>
  );
};
export default Card;
