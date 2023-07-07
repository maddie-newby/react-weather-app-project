import React from "react";
import "../../styles.css";
import FormattedTime from "../../FormattedTime";

export default function CurrentWeatherDetailsSunriseSunset(props) {
  return (
    <div className="col-2 current-column">
      <span className="current-values sunrise">
        <FormattedTime timestamp={props.sunrise} timezone={props.timezone} />
      </span>
      <p className="current-descriptions">Sunrise</p>
      <span className="current-values sunset">
        <FormattedTime timestamp={props.sunset} timezone={props.timezone} />
      </span>
      <p className="current-descriptions">Sunset</p>
    </div>
  );
}
