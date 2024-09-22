import './App.css';
import React, { useContext } from 'react';
import Header from './components/Header';
import { UserContext } from './components/ApiContext';
import CurrentWeather from './components/CurrentWeather';
import Cards from './components/Cards';
import Footer from './components/footer';
import Test from './components/Test';
function App() {
  const city = useContext(UserContext);
  console.log(city);
  return (
    <div>
      <Header />
      <CurrentWeather data={city.city} />
      <Cards data={city.city} />
      <Test/>
      <Footer />
    </div>
  );
}

export default App;
