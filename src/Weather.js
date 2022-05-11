import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loading-icons";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      mainTemp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      precipitation: response.data.main.precipitation,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "74284988913c466762956594e85e02f8";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Container">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            className="searchBar"
            type="search"
            placeholder="Search for a city..."
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="submitButton" />
        </form>
        <WeatherInfo data={weatherData} />
        <div className="footer">
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <ThreeDots fill="#000" />
      </div>
    );
  }
}
