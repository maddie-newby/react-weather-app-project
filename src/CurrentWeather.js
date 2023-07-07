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
        <h1 className="city">
          {props.data.city}, {props.data.country}
        </h1>
        <h2 className="local-time">{props.data.time}</h2>
        <h2 className="date">{props.data.date}</h2>
      </div>
      <span className="row current">
        <CurrentWeatherIcon code={props.data.icon} />
        <CurrentWeatherTemperature
          temperature={props.data.temperature}
          description={props.data.description}
        />
        <CurrentWeatherLine />
        <CurrentWeatherDetailsHighLow
          highTemperature={props.data.highTemperature}
          lowTemperature={props.data.lowTemperature}
        />
        <CurrentWeatherDetailsWindHumidity
          wind={props.data.wind}
          humidity={props.data.humidity}
        />
        <CurrentWeatherDetailsSunriseSunset
          sunrise={props.data.sunrise}
          sunset={props.data.sunset}
        />
      </span>
    </div>
  );
}
