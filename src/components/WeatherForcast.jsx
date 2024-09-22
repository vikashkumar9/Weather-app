import { useState, useEffect, useContext } from "react";
import ForcastCard from "./ForcastCard";
import { UserContext } from "./ApiContext";
const WeatherForecast = ({ data }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { unit } = useContext(UserContext);
  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=${unit}&appid=cc19773591f4611ef29e43d282dc47fd`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setWeather(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const groupedWeather = weather.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayData = {
      min: item.main.temp_min,
      max: item.main.temp_max,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    };

    if (!acc[day]) {
      acc[day] = dayData;
    } else {
      acc[day].min = Math.min(acc[day].min, dayData.min);
      acc[day].max = Math.max(acc[day].max, dayData.max);
    }

    return acc;
  }, {});
  const lastFiveDays = Object.entries(groupedWeather).slice(-5);

  return (
    <div className="text-center mx-auto md:w-[48%] text-white m-8">
      <div className="w-50% flex flex-col justify-center text-center my-8">
        {lastFiveDays.map(([day, { min, max, description, icon }], index) => (
          <div key={index}>
            <ForcastCard day={day} min={min} max={max} icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
