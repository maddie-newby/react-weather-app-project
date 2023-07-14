import React from "react";

export default function CurrentWeatherDetailsHighLow(props) {
  return (
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
  );
}
