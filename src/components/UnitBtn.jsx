import React, { useContext, useState } from 'react';
import { UserContext } from './ApiContext';

const UnitBtn = () => {
    const {  unit,setUnit } = useContext(UserContext);

    const toggleUnit=()=>{
 if(unit==="metric"){
    setUnit("imperial")
 }else{
    setUnit("metric")
 }
    }

  return (
    <button
      onClick={toggleUnit}
      className='m-[20px] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
    >
      {unit === 'metric' ? '°C' : '°F'}
    </button>
  );
};

export default UnitBtn;
