import React from "react";
import "../../styles.css";

export default function CurrentWeatherDetailsHighLow() {
  return (
    <div className="col-2 current-column">
      <span className="current-values temp-max">27</span>{" "}
      <span className="temperature-unit">°C</span>
      <p className="current-descriptions">High</p>
      <span className="current-values temp-min">13</span>{" "}
      <span className="temperature-unit">°C</span>
      <p className="current-descriptions">Low</p>
    </div>
  );
}
