import React from "react";
import "./WeatherForecast.css";
import CurrentWeatherIcon from "./CurrentWeather/CurrentWeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} °C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature} °C`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="row forecast-row">
      <div className="col-2 five-day-details">
        <p>{day()}</p>
        <p>12/7</p>
      </div>
      <div className="col-2 five-day-details">
        <CurrentWeatherIcon
          code={props.data.weather[0].icon}
          size={30}
          color={"#5A6268"}
        />
      </div>
      <div className="col-2 five-day-details">
        <span className="forecast-temp-max">{maxTemperature()}</span>
        <p>High</p>
      </div>
      <div className="col-2 five-day-details">
        <span className="forecast-temp-min">{minTemperature()}</span> <p>Low</p>
      </div>
      <div className="col-2 five-day-details">
        <p>{Math.round(props.data.wind_speed * 3.6)} km/h</p>
        <p>Wind</p>
      </div>
      <div className="col-2 five-day-details">
        <p>{props.data.humidity} %</p>
        <p>Humidity</p>
      </div>
    </div>
  );
}
