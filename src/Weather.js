import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;

    let sunrise = new Date(response.data.sys.sunrise * 1000);
    let sunriseLocalTime = sunrise.getTime();
    let sunriseLocalOffset = sunrise.getTimezoneOffset() * 60000;
    let sunriseUtc = sunriseLocalTime + sunriseLocalOffset;

    let sunset = new Date(response.data.sys.sunset * 1000);
    let sunsetLocalTime = sunset.getTime();
    let sunsetLocalOffset = sunset.getTimezoneOffset() * 60000;
    let sunsetUtc = sunsetLocalTime + sunsetLocalOffset;

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(utc + 1000 * response.data.timezone),
      time: new Date(utc + 1000 * response.data.timezone),
      temperature: response.data.main.temp,
      highTemperature: response.data.main.temp_max,
      lowTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      description:
        response.data.weather[0].description.charAt(0).toUpperCase() +
        response.data.weather[0].description.substr(1),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      sunrise: new Date(sunriseUtc + 1000 * response.data.timezone),
      sunset: new Date(sunsetUtc + 1000 * response.data.timezone),
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
    const apiKey = "5da7b2dc058f07286fea39c4cee516a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function onPositionRetrieveSuccessfully(position) {
    let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function retrievePosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(onPositionRetrieveSuccessfully);
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
              />
            </div>
            <div className="w-25">
              <div className="search-button">
                <input type="submit" className="btn" value="Search" />
              </div>
            </div>
          </form>
        </div>
        <div className="row pt-0 pb-3" onSubmit={retrievePosition}>
          <form>
            <input
              className="current-location-link"
              type="submit"
              value="Use current location"
            />
          </form>
        </div>
        <CurrentWeather data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
