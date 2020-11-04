import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Container from './component/Container';
import WeatherService from './service/weatherservice'
const  App = () => {
  const [weather, setWeather] = useState();
  const [notFound, setNotFound] = useState(false);
  const [input, setInput] = useState('');
  const history = useHistory();
  const get_weather = useCallback(async()=>{
    const weather_data = await WeatherService.getWeather(null, input);
    weather_data.cod === 200 ? setWeather(weather_data) : setNotFound(true)
  },[input])

  const searchHandler = (e: any) => {
    if(e.key === 'Enter'){
      get_weather();
    }
  }

  const inputHandler = (value: string) => {
    setInput(value);
  }

  return (
    <>
    {
      notFound ? history.push('/404') : <Container inputHandler={inputHandler} searchHandler={searchHandler} weather={weather} />
    }
    
  </>
  );
}

export default App;
