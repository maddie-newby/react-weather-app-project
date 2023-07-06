import React from "react";
import axios from "axios";

export default function Weather(city) {
  function handleResponse(response) {
    alert(`The weather in Bristol is ${response.data.main.temp} degrees`)
  }
    let apiKey="3c949ba49d38be2487ee278e0d2d4059";
    let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(handleResponse);
    return <h2>Weather</h2>;
}
