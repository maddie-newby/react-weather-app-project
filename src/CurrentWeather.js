import React from "react";
import "./styles.css";

import CurrentWeatherDetails from "./CurrentWeather/CurrentWeatherDetails";
import FormattedTime from "./FormattedTime";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  return (
    <div>
      <div className="alignleft">
        <h1 className="city">
          {props.data.city}, {props.data.country}
        </h1>
        <h2 className="local-time">
          <FormattedTime time={props.data.time} />
        </h2>
        <h2 className="date">
          <FormattedDate date={props.data.date} />
        </h2>
      </div>
      <span className="row current">
        <CurrentWeatherDetails
          icon={props.data.icon}
          celsius={props.data.temperature}
          description={props.data.description}
          highTemperature={props.data.highTemperature}
          lowTemperature={props.data.lowTemperature}
          wind={props.data.wind}
          humidity={props.data.humidity}
          sunrise={props.data.sunrise}
          sunset={props.data.sunset}
        />
      </span>
    </div>
  );
}
