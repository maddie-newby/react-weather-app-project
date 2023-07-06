import React from "react";
import "./styles.css";

import CurrentWeatherTemperature from "./CurrentWeather/CurrentWeatherTemperature";
import CurrentWeatherIcon from "./CurrentWeather/CurrentWeatherIcon";
import CurrentWeatherLine from "./CurrentWeather/CurrentWeatherLine";
import CurrentWeatherDetailsHighLow from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsHighLow";
import CurrentWeatherDetailsWindHumidity from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsWindHumidity";
import CurrentWeatherDetailsSunriseSunset from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsSunriseSunset";

export default function CurrentWeather(props) {
  return (
    <div>
      <div className="alignleft">
        <h1 className="city">{props.city}</h1>
        <h2 className="local-time">10:00</h2>
        <h2 className="date">Tuesday 13th June 2023</h2>
      </div>
      <div className="row current">
        <CurrentWeatherIcon code={props.data.icon} />
        {/*<CurrentWeatherTemperature />
      <CurrentWeatherLine />
      <CurrentWeatherDetailsHighLow />
      <CurrentWeatherDetailsWindHumidity />
  <CurrentWeatherDetailsSunriseSunset />*/}
      </div>
    </div>
  );
}
