import React, { useEffect, useState } from 'react';

const Test = () => {
  const [weatherData, setWeatherData] = useState(null);  // For storing API response
  const [error, setError] = useState(null);  // For storing any errors

  useEffect(() => {
    const apiKey = 'c92efa8ec94b78ed2b287e34b8f81a85';  // Replace with your API key
    const city = 'London';
    const startTime = Math.floor(Date.now() / 1000) - (86400 * 5);  // 5 days ago
    const endTime = Math.floor(Date.now() / 1000);  // Current time

    // Fetch historical weather data
    fetch(`https://history.openweathermap.org/data/2.5/history/city?q=${city}&type=hour&start=${startTime}&end=${endTime}&appid=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);  // Store the response data in state
      })
      .catch(error => {
        setError(error.message);  // Handle errors
      });
  }, []);  // Empty dependency array means this runs once after the component mounts

  return (
    <div>
      <h1>Historical Weather Data</h1>
      {error && <p>Error: {error}</p>}
      {weatherData ? (
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>  // Display weather data
      ) : (
        <p>Loading...</p>  // Show a loading message while waiting for the API response
      )}
    </div>
  );
};

export default Test;
