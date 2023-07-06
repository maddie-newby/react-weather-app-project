import React from "react";
import "../../styles.css";

export default function CurrentWeatherDetailsSunriseSunset() {
  return (
    <div className="col-2 current-column">
      <span className="current-values sunrise">05:27</span>
      <p className="current-descriptions">Sunrise</p>
      <span className="current-values sunset">21:43</span>
      <p className="current-descriptions">Sunset</p>
    </div>
  );
}
