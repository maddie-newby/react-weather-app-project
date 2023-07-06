import React from "react";
import "./styles.css";

import CitySearch from "./CitySearch";
import CurrentWeather from "./CurrentWeather";
import Next5Days from "./Next5Days";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <CitySearch />
        <CurrentWeather />
        <Next5Days />
      </div>
    </div>
  );
}
