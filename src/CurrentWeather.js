import React from "react";
import "./styles.css";

import CurrentWeatherTemperature from "./CurrentWeather/CurrentWeatherTemperature";
import CurrentWeatherIcon from "./CurrentWeather/CurrentWeatherIcon";
import CurrentWeatherLine from "./CurrentWeather/CurrentWeatherLine";
import CurrentWeatherDetailsHighLow from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsHighLow";
import CurrentWeatherDetailsWindHumidity from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsWindHumidity";
import CurrentWeatherDetailsSunriseSunset from "./CurrentWeather/CurrentWeatherDetails/CurrentWeatherDetailsSunriseSunset";

export default function CurrentWeather(weather) {
  return (
    <div className="row current">
      <CurrentWeatherIcon weather={weather.weather[0].icon} />
      <CurrentWeatherTemperature weather={weather} />
      <CurrentWeatherLine weather={weather} />
      <CurrentWeatherDetailsHighLow weather={weather} />
      <CurrentWeatherDetailsWindHumidity weather={weather} />
      <CurrentWeatherDetailsSunriseSunset weather={weather} />
    </div>
  );
}
