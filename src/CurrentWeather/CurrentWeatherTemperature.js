import React from "react";
import "../styles.css";

export default function CurrentWeatherTemperature() {
  return (
    <div className="col-3 current-weather-column">
      <div className="current-weather-both">
        <h1 className="current-weather-temperature">27</h1>
        <span className="units">
          <a href="#" id="celsius-link" className="active">
            °C
          </a>
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
      <p className="current-weather">Mostly sunny</p>
    </div>
  );
}
