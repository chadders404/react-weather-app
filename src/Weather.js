import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let city = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: props.defaultCity,
      date: new Date(response.data.dt * 1000),
      mainTemp: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      precipitation: response.data.main.precipitation,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function showResults(event) {
    event.preventDefault();
  }

  if (weatherData.ready) {
    return (
      <div className="Container">
        <form onSubmit={showResults} className="searchForm">
          <input
            className="searchBar"
            type="search"
            placeholder="Search for a city..."
            autoFocus="on"
          />
          <input type="submit" value="Search" className="submitButton" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "74284988913c466762956594e85e02f8";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
