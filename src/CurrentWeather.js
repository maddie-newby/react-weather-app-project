import React from "react";
import "./styles.css";

import CurrentWeatherTemperature from "./CurrentWeather/CurrentWeatherTemperature";
import CurrentWeatherIcon from "./CurrentWeather/CurrentWeatherIcon";
import CurrentWeatherLine from "./CurrentWeather/CurrentWeatherLine";
import CurrentWeatherDetailsHighLow from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsHighLow";
import CurrentWeatherDetailsWindHumidity from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsWindHumidity";
import CurrentWeatherDetailsSunriseSunset from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsSunriseSunset";

export default function CurrentWeather() {
  return (
    <div className="row current">
      <CurrentWeatherIcon />
      <CurrentWeatherTemperature />
      <CurrentWeatherLine />
      <CurrentWeatherDetailsHighLow />
      <CurrentWeatherDetailsWindHumidity />
      <CurrentWeatherDetailsSunriseSunset />
    </div>
  );
}
