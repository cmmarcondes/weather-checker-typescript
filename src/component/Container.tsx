import React from 'react';
import { Wrapper, Input, City, DateTime, Celsius, Weather } from '../styles/styles';

interface Props {
    inputHandler: any,
    searchHandler: any,
    weather: any,
}
const Container: React.FC<Props> = ({
    inputHandler,
    searchHandler,
    weather
}) => {
    const dateBuilder = (d: any) => {
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-feira", "Sabado"]
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()]
        let year = d.getFullYear();

        return `${day}, ${date} de ${month} de ${year}`;
    }
    return(
    <>{
    weather ? <Wrapper bg_weather={weather.weather[0].main}>
        <Input placeholder="Search..." onChange={(e) => inputHandler(e.target.value)} onKeyPress={searchHandler} />
        <>
        <City>
        {weather.name}
    </City>
    <DateTime>
        {dateBuilder(new Date())}
        </DateTime>
    <Celsius>
        {weather.main.temp}°
    </Celsius>
    <Weather>
        {weather.weather[0].main}
    </Weather>
    
        </>
    </Wrapper> 
    : 
    <>
    <Wrapper bg_weather>
    <Input placeholder="Search..." onChange={(e) => inputHandler(e.target.value)} onKeyPress={searchHandler} />
    {
        weather ? <>
        <City>
        {weather.name}
    </City>
    <DateTime>
        {dateBuilder(new Date())}
        </DateTime>
    <Celsius>
        {weather.main.temp}°
    </Celsius>
    <Weather>
        {weather.weather[0].main}
    </Weather>
    
        </>
        :
        false
    }
    </Wrapper>
    </>
    }

    </>
    );
}

export default Container;