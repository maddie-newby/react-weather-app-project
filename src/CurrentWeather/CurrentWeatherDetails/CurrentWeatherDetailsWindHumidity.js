import React from "react";

export default function CurrentWeatherDetailsWindHumidity(props) {
  return (
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
  );
}
