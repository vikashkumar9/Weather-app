import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext({
  city: {},
  search: '',
  setSearch: () => {},
});

export const ApiContext = ({ children }) => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState('new york');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit,setUnit]=useState("metric")
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&APPID=153d55b3c3981c4e2659bca90b189a0e`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const resJson = await response.json();
        setCity(resJson);
        console.log(resJson)
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [search,unit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <UserContext.Provider value={{ city, search, setSearch, unit, setUnit }}>
      {children}
    </UserContext.Provider>
  );
};
