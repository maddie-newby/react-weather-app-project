import React from "react";
import "../../styles.css";

export default function CurrentWeatherDetailsWindHumidity() {
  return (
    <div className="col-2 current-column">
      <span className="current-values wind-speed">12</span> <span>mph</span>
      <p className="current-descriptions">Wind</p>
      <span className="current-values humidity">56</span> <span>%</span>
      <p className="current-descriptions">Humidity</p>
    </div>
  );
}
