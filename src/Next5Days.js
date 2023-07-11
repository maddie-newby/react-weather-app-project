import React from "react";
import "./WeatherForecast.css";
import CurrentWeatherIcon from "./CurrentWeather/CurrentWeatherIcon";

export default function Next5Days() {
  return (
    <div>
      <h2 className="forecastHeading">Next 5 days</h2>
      <div className="weatherForecast" id="forecast">
        <div className="row forecast-row">
          <div className="col-2 five-day-details">
            <p>Tue</p>
            <p>12/7</p>
          </div>
          <div className="col-2 five-day-details">
            <CurrentWeatherIcon code={"01d"} size={30} color={"#5A6268"} />
          </div>
          <div className="col-2 five-day-details">
            <span className="forecast-temp-max">25</span>
            <span className="temperature-unit">°C</span>
            <p>High</p>
          </div>
          <div className="col-2 five-day-details">
            <span className="forecast-temp-min">19</span>
            <span className="temperature-unit">°C</span>
            <p>Low</p>
          </div>
          <div className="col-2 five-day-details">
            <p>25 km/h</p>
            <p>Wind</p>
          </div>
          <div className="col-2 five-day-details">
            <p>20 %</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
