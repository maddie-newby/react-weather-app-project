import React from "react";
import "./styles.css";

import CitySearch from "./CitySearch";
import Next5Days from "./Next5Days";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather />
        <Next5Days />
      </div>
    </div>
  );
}
