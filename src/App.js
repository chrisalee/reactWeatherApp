import React, { useEffect, useState } from 'react';
import './App.css';
import { CHICAGOWeather, fetchWeather } from './api/fetchWeather';
// import axios from 'axios';

const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [chicagoWeather, setChicagoWeather] = useState({});

  const search = async (event) => {
    if(event.key === 'Enter') {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  }

  useEffect(() => async () => {
    const chicagoWeatherData = await CHICAGOWeather();

    setChicagoWeather(chicagoWeatherData);
  }, [])

  return (
    <div className='app__container'>
      
      <input 
        type='text' 
        className='app__search' 
        placeholder='Enter a city' 
        value={query} 
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      {
        weather.main && (
          <div className='app__city'>

            <h2 className='app__cityName'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
          

            <div className='app__cityTemp'>
              {Math.round(weather.main.temp)}
              <sup>&deg;F</sup>
            </div>

            <div className='app__cityInfo'>
              <img className='app__cityIcon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' />
              <p>{weather.weather[0].description}</p>
            </div>

          </div>
        )
      }


      {/* <div className='chi'>
      {
        chicagoWeather.main && (
          <div className='chi__city'>

            <h2 className='chi__cityName'>
              <span>{chicagoWeather.name}</span>
              <sup>Sunrise: {chicagoWeather.sys.sunrise}</sup>
              <sup>Sunset: {chicagoWeather.sys.sunset}</sup>
            </h2>
          

            <div className='chi__cityTemp'>
              {Math.round(chicagoWeather.main.temp)}
              <sup>&deg;F</sup>
            </div>

            <div className='chi__cityInfo'>
              <img className='chi__cityIcon' src={`https://openweathermap.org/img/wn/${chicagoWeather.weather[0].icon}@2x.png`} alt='' />
              <p>{chicagoWeather.weather[0].description}</p>
            </div>

          </div>
        )
      }
      </div> */}
        
        
    </div>


  )
}

export default App;
