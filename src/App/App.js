import { useEffect, useState } from 'react';
import { Forecast } from '../Forecast/Forecast';
import { WeatherDay } from '../WeatherDay/WeatherDay';
import { Places } from '../Places/Places';
import './App.css';
import { WeatherDaySw } from '../WeatherDaySw/WeatherDaySw';


export const App = () => {

  const [weatherInfo, setWeatherInfo] = useState();
  const [temperatura, setTemperatura] = useState("");
  const [ciudad] = useState("Bogotá");


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=bogota&cnt=3&appid=d0fed389831e829ff46ed9cf1e3950ca`)
      .then(res => res.json())
      .then(res => setWeatherInfo(res.list.map(df => {
        return {
          icon: df.weather[0].icon,
          min: df.main.temp_min - 273.15,
          max: df.main.temp_max - 273.15,
          weatherType: df.weather[0].main,
        }
      })));
  }, []);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bogota,CO&APPID=d0fed389831e829ff46ed9cf1e3950ca`)
        .then(res => res.json())
        .then(res => setTemperatura(res.main.temp - 273.15));

}, []);


  return (
    <div>
      <WeatherDay temperatura={temperatura} ciudad={ciudad}/>
      <div className="divContainer">
        <div className="divForecast">
          <div className="daysForecast">
            <p><b>3 Days</b> Forecast</p>
          </div>
          {!!weatherInfo && weatherInfo.map((i, index) => (
            <div key={index}>
              <Forecast icon={i.icon} weatherType={i.weatherType} min={i.min} max={i.max} />
            </div>))}
        </div>
        <div>
          <Places />
        </div>
        <div className="containerWeatsw">
          <WeatherDaySw />
        </div>
      </div>

    </div>
  );
}

export default App;

