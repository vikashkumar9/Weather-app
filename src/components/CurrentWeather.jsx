import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { main, weather } = data;

  if (!Array.isArray(weather) || weather.length === 0) {
    return <div>No weather data available</div>;
  }

  const { temp, temp_min, temp_max, humidity } = main;
  const { icon, description } = weather[0];

  return (
    <div className='text-center w-[100%] text-white'>
      <div className='w-full flex justify-center text-center my-8'>
        <div className=' p-8  font-bold text-7xl'>
          <div className='flex justify-center'>
            <div> {Math.round(temp)}°</div>
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt='Weather Icon'
              //   className='text-white'
            />
          </div>
          <p className='text-lg mt-4'>
            {description} {Math.round(temp_min)}° / {Math.round(temp_max)}°
            Humidity:{humidity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
