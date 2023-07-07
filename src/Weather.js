import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import Next5Days from "./Next5Days";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function formatTime(timestamp, timezone) {
    let time = new Date(timestamp + timezone * 1000);
    let hours =
      time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    let minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;

    if (hours > 23) {
      hours -= 24;
    } else if (hours < 0) {
      hours += 24;
    }

    return `${hours}:${minutes}`;
  }

  function formatDate(timestamp) {
    let now = new Date(timestamp * 1000);
    let date = now.getDate();

    const nth = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[now.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    return `${day} ${date}<sup>${nth(date)}</sup> ${month} ${year}`;
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      time: formatTime(response.data.dt * 1000, response.data.timezone),
      date: formatDate(response.data.sys.timestamp),
      temperature: response.data.main.temp,
      highTemperature: response.data.main.temp_max,
      lowTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      sunrise: formatTime(
        response.data.sys.sunrise * 1000,
        response.data.timezone
      ),
      sunset: formatTime(
        response.data.sys.sunset * 1000,
        response.data.timezone
      ),
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
