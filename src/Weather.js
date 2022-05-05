import React, { useState } from "react";
import "./App.css";

export default function Search(props) {
  let [city, setCity] = useState("Cardiff");

  function showResults(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Container">
      <form onSubmit={showResults} className="searchForm">
        <input
          className="searchBar"
          type="search"
          placeholder="Enter a city..."
          autoFocus="on"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="submitButton" />
      </form>

      <div className="dateTimeDiscription">
        <ul>
          <h1>{city}</h1>
          <li>Day/Time</li>
          <li>Discription</li>
        </ul>
      </div>

      <div className="icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="mostly cloudy"
        />
      </div>

      <div className="mainTemp">
        <span className="mainTempNumber">6</span>
        <span className="tempUnit">°C</span>
      </div>

      <div className="weatherProperties">
        <ul>
          <li>Precipitation: 15% </li>
          <li>Humidity: 69% </li>
          <li>Wind: 15 km/hr</li>
        </ul>
      </div>
    </div>
  );
}
