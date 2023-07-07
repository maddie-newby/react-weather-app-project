import React from "react";
import "../../styles.css";

export default function CurrentWeatherDetailsSunriseSunset(props) {
  return (
    <div className="col-2 current-column">
      <span className="current-values sunrise">{props.sunrise}</span>
      <p className="current-descriptions">Sunrise</p>
      <span className="current-values sunset">{props.sunset}</span>
      <p className="current-descriptions">Sunset</p>
    </div>
  );
}
