import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f5029b784306910c19746e40c14d6cd3";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios
      .get(url)
      .then((response) => {
        setMessage(
          <div>
            <h2>{response.data.name}</h2>
          <ul>
            <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
            <li>Description: {response.data.weather[0].description}</li>
            <li>Humidity: {response.data.main.humidity} %</li>
            <li>
              Wind:{" "}
              {Math.round(
                (response.data.wind.speed * 3.6 + Number.EPSILON) * 100
              ) / 100}{" "}
              km/h
            </li>
            <li>
              <img
                src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                alt={response.data.weather[0].description}
              />
            </li>
          </ul>
          </div>
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      {message && <h2>{message}</h2>}
    </div>
  );
}
