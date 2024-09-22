import React from "react";

const ForcastCard = ({ day, min, max, icon }) => {
  return (
    <div className="flex bg-black bg-opacity-50 text-white rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between w-full">
        <p className="mr-4">
          <strong>{day}</strong>
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt={`Weather icon for ${day}`}
          className="w-10 h-10"
        />
        <div className=" mt-2">
          <p>Min: {Math.round(min)}°</p>
          <p>Max: {Math.round(max)}°</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default ForcastCard;
