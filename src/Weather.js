import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import Next5Days from "./Next5Days";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      timestamp: response.data.dt,
      timezone: response.data.timezone,
      temperature: response.data.main.temp,
      highTemperature: response.data.main.temp_max,
      lowTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row city-search">
          <form className="search-bar" onSubmit={handleSubmit}>
            <div className="form-group w-75">
              <input
                type="search"
                className="form-control"
                id="city-input"
                placeholder="Enter city"
                autoFocus="on"
                onChange={handleCityChange}
              />{" "}
              <button className="current-location-link">
                Use current location
              </button>
            </div>
            <div className="w-25">
              <div className="search-button">
                <input type="search" className="btn" value="Search" />
              </div>
            </div>
          </form>
        </div>
        <CurrentWeather data={weatherData} />
        <Next5Days coordinates={weatherData.coordinates} />
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
