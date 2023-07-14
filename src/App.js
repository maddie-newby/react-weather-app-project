import React from "react";
import "./styles.css";
import "./WeatherForecast.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}
