import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <p className='text-white'>{formattedTime}</p>
    </div>
  );
};

export default Clock;
