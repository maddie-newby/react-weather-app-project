import React, { useState } from "react";
import FormattedTime from "../FormattedTime";
import "../styles.css";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import CurrentWeatherLine from "./CurrentWeatherLine";
import CurrentWeatherDetailsSunriseSunset from "./CurrentWeatherDetails/CurrentWeatherDetailsSunriseSunset";

export default function CurrentWeatherDetails(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit(celsiusTemperature) {
    return (celsiusTemperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="d-flex justify-content-between">
        <CurrentWeatherIcon code={props.icon} size={100} />
        <div className="col-3 current-weather-column">
          <div className="current-weather-both">
            <h1 className="current-weather-temperature">
              {Math.round(props.celsius)}
            </h1>
            <span className="units">
              {" "}
              <a href="#" id="celsius-link" className="active">
                °C
              </a>{" "}
              |{" "}
              <a href="#" id="fahrenheit-link" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </div>
          <p className="current-weather">{props.description}</p>
        </div>
        <CurrentWeatherLine />
        <div className="col-2 current-column">
          <span className="current-values temp-max">
            {Math.round(props.highTemperature)}
          </span>{" "}
          <span className="temperature-unit">°C</span>
          <p className="current-descriptions">High</p>
          <span className="current-values temp-min">
            {Math.round(props.lowTemperature)}
          </span>{" "}
          <span className="temperature-unit">°C</span>
          <p className="current-descriptions">Low</p>
        </div>
        <div className="col-2 current-column">
          <span className="current-values wind-speed">
            {Math.round(props.wind * 3.6)}
          </span>{" "}
          <span>km/h</span>
          <p className="current-descriptions">Wind</p>
          <span className="current-values humidity">{props.humidity}</span>{" "}
          <span>%</span>
          <p className="current-descriptions">Humidity</p>
        </div>
        <CurrentWeatherDetailsSunriseSunset
          sunrise={props.sunrise}
          sunset={props.sunset}
        />
      </span>
    );
  } else {
    return (
      <span className="d-flex justify-content-between">
        <CurrentWeatherIcon code={props.icon} size={100} />
        <div className="col-3 current-weather-column">
          <div className="current-weather-both">
            <h1 className="current-weather-temperature">
              {Math.round(fahrenheit(props.celsius))}
            </h1>
            <span className="units">
              {" "}
              <a href="#" id="celsius-link" onClick={showCelsius}>
                °C
              </a>{" "}
              |{" "}
              <a href="#" id="fahrenheit-link" className="active">
                °F
              </a>
            </span>
          </div>
          <p className="current-weather">{props.description}</p>
        </div>
        <div className="col-1 vertical-line">
          <i className="fa-solid fa-grip-lines-vertical"></i>
        </div>
        <div className="col-2 current-column">
          <span className="current-values temp-max">
            {Math.round(fahrenheit(props.highTemperature))}
          </span>{" "}
          <span className="temperature-unit">°C</span>
          <p className="current-descriptions">High</p>
          <span className="current-values temp-min">
            {Math.round(fahrenheit(props.lowTemperature))}
          </span>{" "}
          <span className="temperature-unit">°C</span>
          <p className="current-descriptions">Low</p>
        </div>
        <div className="col-2 current-column">
          <span className="current-values wind-speed">
            {Math.round(props.wind * 2.23693629)}
          </span>{" "}
          <span>miles/h</span>
          <p className="current-descriptions">Wind</p>
          <span className="current-values humidity">{props.humidity}</span>{" "}
          <span>%</span>
          <p className="current-descriptions">Humidity</p>
        </div>
        <CurrentWeatherDetailsSunriseSunset
          sunrise={props.sunrise}
          sunset={props.sunset}
        />
      </span>
    );
  }
}
