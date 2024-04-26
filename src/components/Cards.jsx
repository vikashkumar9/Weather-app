import React from 'react';
import Card from './Card';
import { CiTempHigh } from 'react-icons/ci';
import { WiHumidity } from 'react-icons/wi';
import { LuWind } from 'react-icons/lu';
import { SiSingaporeairlines } from 'react-icons/si';
import { MdOutlineVisibility } from 'react-icons/md';
import { GiHotSurface } from 'react-icons/gi';

const Cards = ({ data }) => {
  const { main, wind, weather, visibility } = data;

  if (!Array.isArray(weather) || weather.length === 0) {
    return <div>No weather data available</div>;
  }

  const { feels_like, pressure, grnd_level, humidity } = main;
  const { icon, description } = weather[0];
  const { speed } = wind;

  return (
    <div className='px-4 md:w-[50%] mx-auto  grid grid-cols-3 gap-4 justify-center'>
      <div>
        <Card
          icon={<CiTempHigh />}
          text='Feels like'
          value={feels_like}
          unit='°'
        />
      </div>
      <div>
        <Card
          icon={<WiHumidity />}
          text='Humidity '
          value={humidity}
          unit=' %'
        />
      </div>

      <div>
        <Card
          icon={<SiSingaporeairlines />}
          text='Pressure '
          value={pressure}
          unit=' hpa'
        />
      </div>
      <div>
        <Card icon={<LuWind />} text='Wind ' value={speed} unit=' km/h' />
      </div>

      <div>
        <Card
          icon={<MdOutlineVisibility />}
          text='Visibility '
          value={visibility / 1000}
          unit=' km'
        />
      </div>
      <div>
        <Card
          icon={<GiHotSurface />}
          text='Grnd level '
          value={grnd_level}
          unit=' m'
        />
      </div>
    </div>
  );
};

export default Cards;
